"use client";

import MSLogoutButton from "@/components/ms-button/MSLogoutButton";

const Admin = () => {
  return (
    <div className="container-full  h-[100vh]   flex-col justify-center items-center flex space-y-5">
      <p>Admin Page</p>
      <div>
        <MSLogoutButton />
      </div>
    </div>
  );
};

export default Admin;
