import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");

  if (accessToken) {
    return NextResponse.next();
  }

  if (refreshToken) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/refresh", {
      method: "POST",
      headers: {
        cookie: `refresh_token=${refreshToken.value}`,
      },
    });

    if (res.ok) {
      const setCookie = res.headers.get("set-cookie");
      if (setCookie) {
        console.log("[PROXY] refresh success");
        request.headers.set("cookie", setCookie);
        const response = NextResponse.next({
          request: { headers: request.headers },
          headers: { "set-cookie": setCookie },
        });

        return response;
      }
    }
  }

  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile"],
};
