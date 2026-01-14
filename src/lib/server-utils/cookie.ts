import { cookies } from "next/headers";
import { FullUser } from "@/components/ui/types";

export async function getUserFromCookie(): Promise<FullUser | undefined> {
  try {
    const cookieStore = await cookies();

    const userCookie = cookieStore.get("user")?.value;
    const refreshToken = cookieStore.get("refresh_token")?.value;

    if (!refreshToken || !userCookie) return undefined;

    const parsed = JSON.parse(decodeURIComponent(userCookie));
    return parsed.state?.user;
  } catch (e) {
    return undefined;
  }
}
