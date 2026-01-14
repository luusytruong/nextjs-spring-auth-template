"use client";

import { useUserStore } from "@/store/user.store";

export default function Profile() {
  const user = useUserStore((s) => s.user);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      {user ? (
        <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-sm max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
              {user.full_name?.charAt(0).toUpperCase() ||
                user.email?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.full_name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-3 border-b pb-2">
              <span className="font-medium">ID</span>
              <span className="col-span-2 text-muted-foreground font-mono text-sm">
                {user.id}
              </span>
            </div>
            <div className="grid grid-cols-3 border-b pb-2">
              <span className="font-medium">Role</span>
              <span className="col-span-2 text-muted-foreground">
                {user.role}
              </span>
            </div>
            {/* Add more fields as needed */}
          </div>

          <div className="mt-6">
            <code className="block bg-muted p-4 rounded text-xs overflow-auto">
              {JSON.stringify(user, null, 2)}
            </code>
          </div>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
