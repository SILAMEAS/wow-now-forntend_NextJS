import Sidenav from "@/app/sidenav/sidenav";
import AddProduct from "../addProduct/page";

const addProductLayout = () => {
  return (
    <Sidenav>
      <div>
        <AddProduct />
      </div>
    </Sidenav>
  );
};

export default addProductLayout;
