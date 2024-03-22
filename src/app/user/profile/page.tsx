import React from 'react';
import LayoutUserPage from "@/app/user/LayoutUserPage";

const Profile = () => {
  return (
      <LayoutUserPage>
          <div className="h-full flex justify-center items-center">
              <p className="text-white"> Profile page</p>
          </div>
      </LayoutUserPage>
  );
};

export default Profile;
