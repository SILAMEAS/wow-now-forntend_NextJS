"use client";
import { UserRequest } from "@/utils/api/request/UserRequest";

export default function MSLogoutButton() {
  // const req = new UserRequest();
  return (
    <button
      className="bg-red-500 text-white px-4 rounded-md"
      // onClick={req.logout}
    >
      logout
    </button>
  );
}
