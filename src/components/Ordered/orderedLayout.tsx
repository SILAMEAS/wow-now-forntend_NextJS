import Sidenav from "@/app/sidenav/sidenav";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import { Stack } from "@mui/material";
const orderedLayout = () => {
  return (
    <>
      <Sidenav>
        <Stack justifyContent={"center"} alignItems={"center"} height={"70vh"}>
          <h1>Ordered will come soon!</h1>
          <EngineeringOutlinedIcon sx={{ height: "300px", width: "300px" }} />
        </Stack>
      </Sidenav>
    </>
  );
};

export default orderedLayout;
