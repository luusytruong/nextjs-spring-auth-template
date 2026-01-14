import Forbidden from "@/components/pages/forbidden";
import { verifyToken } from "@/lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) redirect("/login");

  const payload = await verifyToken(token);
  if (!payload) redirect("/login");

  if (payload.scope !== "ROLE_ADMIN") {
    return <Forbidden />;
  }

  return children;
}
