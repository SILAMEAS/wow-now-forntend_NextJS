"use client";

import {$logout} from "@/redux/api/hook/useLogout";

export default function MSLogoutButton() {
  return (
    <button
      className="bg-red-500 text-white px-4 rounded-md"
      onClick={$logout}
    >
      logout
    </button>
  );
}
