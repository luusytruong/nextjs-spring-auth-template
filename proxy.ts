import { apiFetch } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");

  if (accessToken) {
    return NextResponse.next();
  }

  if (refreshToken) {
    const res = await apiFetch("/auth/refresh", {
      method: "POST",
      headers: { cookie: `refresh_token=${refreshToken.value}` },
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

  return NextResponse.redirect(
    new URL("/login?redirect=" + encodeURIComponent(request.url), request.url)
  );
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile"],
};
