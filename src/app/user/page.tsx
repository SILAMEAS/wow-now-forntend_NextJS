import MSLogoutButton from "@/components/ms-button/MSLogoutButton";

const User = () => {
  return (
    <div className="container-full  h-[100vh]   flex-col justify-center items-center flex space-y-5">
      <p>User page</p>
      <div>
        <MSLogoutButton />
      </div>
    </div>
  );
};

export default User;
