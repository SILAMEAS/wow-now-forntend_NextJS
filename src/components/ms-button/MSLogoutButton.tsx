"use client";
import { HandleReq } from "../Utils/request/HandleReq";

export default function MSLogoutButton() {
  const req = new HandleReq();
  return (
    <button
      className="bg-red-500 text-white px-4 rounded-md"
      onClick={req.logout}
    >
      logout
    </button>
  );
}
