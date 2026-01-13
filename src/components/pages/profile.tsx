"use client";

import { ApiResponse, FullUser } from "@/types";
import React from "react";

interface ProfileProps {
  // props types here
  data: ApiResponse<FullUser>;
}

export default function Profile({ data }: ProfileProps) {
  return (
    <div className="p-4">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
