"use client";

export default function MSLogoutButton() {
  return (
    <button
      className="bg-blue-600 text-white px-4 rounded-md"
      onClick={()=>history.go(-1)}
    >
      Back to previous page
    </button>
  );
}
