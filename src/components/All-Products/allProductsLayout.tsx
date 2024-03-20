import Sidenav from "@/app/sidenav/sidenav";
import ListProduct from "@/components/listProduct/page";
import { Stack } from "@mui/material";

const allsProductLayout = () => {
  return (
    <Stack>
      <Sidenav>
        <div>
          <ListProduct />
        </div>
      </Sidenav>
    </Stack>
  );
};

export default allsProductLayout;
