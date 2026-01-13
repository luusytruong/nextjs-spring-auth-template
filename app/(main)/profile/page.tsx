import Profile from "@/components/pages/profile";
import { userApi } from "@/lib/axios";
import { redirect } from "next/navigation";

interface ProfilePageProps {
  // props types here
}

export default async function ProfilePage({}: ProfilePageProps) {
  const data = await userApi.me();

  if (!data.success) {
    return redirect("/auth/login");
  }

  return <Profile data={data} />;
}
