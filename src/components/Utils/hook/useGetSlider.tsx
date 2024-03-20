import { $headers } from "@/components/Utils/reqHeader";
import NGDialog from "@/components/ms-dailog/NGDialog";
import { useDialog } from "@/components/ms-dailog/useDialog";
import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { ConstantStyle } from "../../../Constant/ConstantColor";
import { API_URL } from "../constant";

export const useGetaSlider = () => {
  const [id, setId] = React.useState<string | null>(null);
  const DialogUse = useDialog();
  const [allImg, setAllImgs] = React.useState<Array<any> | null>(null);
  // get type
  const getSlider = async () => {
    try {
      const res = await axios
        .get(`${API_URL}api/v1/product/image/slider`, {
          headers: $headers,
        })
        .then((r) => r.data);
      setAllImgs(res.data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };
  const updateSlider = async () => {
    try {
      await axios
        .delete(`${API_URL}api/v1/product/image/delete/slider/${id}`, {
          headers: $headers,
        })
        .then((r) => r.data);
      window.location.reload();
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };
  React.useMemo(() => {
    getSlider();
  }, []);
  return {
    render: (
      <Stack spacing={10}>
        <NGDialog
          open={DialogUse.isOpen}
          maxWidth={"xl"}
          sxProp={{
            titleSx: {
              p: "40px",
            },
            contentsSx: {
              p: "40px",
            },
            actionSx: {
              padding: "14px 24px",
            },
          }}
          titleDialog={
            <Typography sx={{ ...ConstantStyle.text.titlePage }}>
              Do you want to delete this image?
            </Typography>
          }
          actionDialog={
            <Stack direction={"row"} spacing={5}>
              <Button
                variant="contained"
                color="info"
                onClick={DialogUse.close}
              >
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={updateSlider}>
                Delete
              </Button>
            </Stack>
          }
        />

        {/* <ImageUploader /> */}
        <Stack direction={"row"} flexWrap={"wrap"} gap={5}>
          {allImg?.map((item) => (
            <img
              key={item.uri}
              src={item.uri}
              width={"300px"}
              onClick={() => {
                setId(item.id);
                DialogUse.open();
              }}
            />
          ))}
        </Stack>
      </Stack>
    ),
    data: allImg,
  };
};
export function ImageUploader() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileInputChange = (e: any) => {
    const data = e.target.files;
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("files", selectedFile);

    try {
      const response = await axios.post(
        `${API_URL}api/v1/product/image/slider`,
        formData,
        {
          headers: {
            ...$headers,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.location.reload();
    } catch (error: any) {
      console.error(error);
      alert(error?.message);
    }
  };
  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
      <Stack width={"500px"}>
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} />}
      </Stack>
    </Stack>
  );
}
