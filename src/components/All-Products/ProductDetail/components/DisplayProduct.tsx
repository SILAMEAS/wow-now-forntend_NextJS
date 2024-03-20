import { ConstantStyle } from "@/Constant/ConstantColor";
import {
  ShowImage,
  ShowImageDes,
} from "@/components/All-Products/ProductDetail/components/showImage";
import { API_URL } from "@/components/Utils/constant";
import { $headers } from "@/components/Utils/reqHeader";
import { HandleReq } from "@/components/Utils/request/HandleReq";
import { MSProductImageModify } from "@/components/ms-image/MSImage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import InputField from "./inputField";

function DisplayProduct({ productId }: any) {
  const [chipData, setChipData] = React.useState<
    { value: string; label: string }[] | null
  >(null);

  const router = useRouter();
  const [productImages, setProductImages] = useState<File[]>([]);
  const [selectedImageDescription, setSelectedImageDescription] =
    useState<File | null>(null);
  const [descriptionImage, setDescriptionImage] = useState();
  const [descriptionPreview, setDescriptionPreview] = useState<string | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const reqHandle = new HandleReq();
  // get type
  const getType = async () => {
    reqHandle.getType().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { value, label } = item;
            return { value, label };
          }
        });
        setChipData(modify);
      } else return null;
    });
  };

  useMemo(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${API_URL}api/v1/product/get-product-byid/${productId}`
        );
        setProduct(response.data);

        setIsSpecial(response.data.data.isSpecial ?? "null");
        setIsInStock(response.data.data.isInStock ?? "null");
        const DataRes = response.data.data;

        const { title, price, description, category, type } = DataRes;
        setState((prevState) => ({
          ...prevState,
          title,
          price,
          description,
          category,
          type,
        }));

        getType();
      } catch (error) {
        console.error("ERROR:::", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdateImageDescription = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (descriptionImage) {
      formData.append("files", descriptionImage);
    }
    try {
      if (descriptionImage) {
        const response = await axios.patch(
          `${API_URL}api/v1/product/files/${productId}/images-description-update`,
          formData,
          {
            headers: $headers,
          }
        );
      }
    } catch (error) {
      console.error("ERROR::::", error);
    } finally {
      router.push((window.location.href = "/all-products"));
    }
  };
  const [isSpecial, setIsSpecial] = useState<boolean>(false);
  const [isInStock, setIsInStock] = useState<boolean>(true);

  const [state, setState] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    type: "",
  });

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", productId);
    formData.append("title", state.title);
    formData.append("price", state.price);
    formData.append("description", state.description);
    formData.append("category", state.category);
    formData.append("isSpecial", isSpecial + "");
    formData.append("isInStock", isInStock.toString());
    formData.append("type", state.type);
    for (let i = 0; i < productImages.length; i++) {
      formData.append("files", productImages[i]);
    }

    try {
      if (productImages.length > 0) {
        const response1 = await axios.delete(
          `${API_URL}api/v1/product/delete-file/${productId}`,
          {
            headers: $headers,
          }
        );
      }
      const response = await axios.patch(
        `${API_URL}api/v1/product/files/update`,
        formData,
        {
          headers: $headers,
        }
      );
    } catch (error) {
      console.error("ERROR::::", error);
    } finally {
      handleUpdateImageDescription(e);
    }
  };

  // Handle Image
  const handleImageClick = () => {
    const inputElement = document.getElementById("product-image");
    if (inputElement) {
      inputElement.click();
    }
  };

  const handleImageInputChange = (e: any) => {
    const files = e.target.files;
    const selectedImages = [];

    for (let i = 0; i < files.length; i++) {
      selectedImages.push(files[i]);
    }

    setProductImages([...productImages, ...selectedImages]);
  };

  const handleImageDescriptionDrop = (e: any) => {
    e.preventDefault();
    setSelectedImageDescription(null);

    const files = e.dataTransfer.files;

    if (files.length === 1) {
      const descriptionImage = files[0];
      setSelectedImageDescription(descriptionImage);
      setDescriptionPreview(URL.createObjectURL(descriptionImage));
    } else {
      alert("Please select only one image.");
    }
  };

  const handleImageDescriptionClick = () => {
    const element = document.getElementById("single-image-description-input");
    element?.click();
  };

  const handleImageDescriptionInputChange = (e: any) => {
    const files = e.target.files;

    if (files.length === 1) {
      const descriptionImage = files[0];
      setSelectedImageDescription(descriptionImage);
      setDescriptionImage(descriptionImage);
      setDescriptionPreview(URL.createObjectURL(descriptionImage));
    } else {
      alert("Please select only one image.");
    }
  };

  const handleImageDelete = (image: any, index: any) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const updatedImages = [...productImages];
      updatedImages.splice(index, 1);
      setProductImages(updatedImages);
    }
  };

  const handleUploadMoreImages = () => {
    const element = document.getElementById("product-image");
    element?.click();
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    const selectedImages = [];

    for (let i = 0; i < files.length; i++) {
      selectedImages.push(files[i]);
    }

    setProductImages([...productImages, ...selectedImages]);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography sx={{ ...ConstantStyle.text.titlePage, py: 5 }}>
          Image of Product
        </Typography>
        {product.data?.file ? (
          <ShowImage itemData={product.data?.file} />
        ) : (
          <>No Product Image</>
        )}
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField product={product} state={state} setState={setState} />
          <Stack width={"100%"} alignItems={"start"} direction={"row"}>
            <TextField
              id="outlined-basic"
              label="Type"
              select
              variant="outlined"
              onChange={(e: any) =>
                setState((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }))
              }
              value={state.type}
              sx={{ width: "80%", py: "15px" }}
            >
              {chipData?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormGroup sx={{ pl: "30px" }}>
              <FormControlLabel
                control={<Radio />}
                checked={!isSpecial}
                onClick={(e) => setIsSpecial(false)}
                label="Normal"
              />
              <FormControlLabel
                checked={isSpecial}
                control={<Radio />}
                onClick={(e) => setIsSpecial(true)}
                label="Special"
              />
            </FormGroup>
            <FormGroup sx={{ pl: "30px", width: "300px" }}>
              <FormControlLabel
                control={<Radio />}
                checked={!isInStock}
                onClick={(e) => setIsInStock(false)}
                label="Out of Stock"
              />
              <FormControlLabel
                checked={isInStock}
                control={<Radio />}
                onClick={(e) => setIsInStock(true)}
                label="In Stock"
              />
            </FormGroup>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {productImages.length > 0 ? (
                <div>
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        <MSProductImageModify
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index}`}
                          sx={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                      </div>
                      <div>
                        {image.name}
                        <IconButton
                          color="primary"
                          onClick={() => handleImageDelete(image, index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUploadMoreImages}
                  >
                    Upload More Images
                  </Button>
                </div>
              ) : (
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px dashed #ccc",
                    padding: 10,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <CloudUploadIcon style={{ fontSize: "40px" }} />
                  <Typography>
                    Drag & Drop or Click to Upload Product Image
                  </Typography>
                </Stack>
              )}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="product-image"
                type="file"
                multiple
                onChange={handleImageInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              {selectedImageDescription ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MSProductImageModify
                    src={descriptionPreview!}
                    alt={`Description Preview`}
                    sx={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    {selectedImageDescription.name}
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setSelectedImageDescription(null);
                        setDescriptionPreview(null);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              ) : (
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px dashed #ccc",
                    padding: 10,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onDragEnter={handleImageDescriptionClick}
                  onDragOver={handleImageDescriptionDrop}
                  onDragLeave={handleDragLeave}
                  onDrop={handleImageDescriptionDrop}
                  onClick={handleImageDescriptionClick}
                >
                  <div>
                    <CloudUploadIcon style={{ fontSize: "33px" }} />
                    <Typography>
                      {selectedImageDescription
                        ? (selectedImageDescription as File).name
                        : "Drag & Drop or Click to Upload Product Image Description"}
                    </Typography>
                  </div>
                </Stack>
              )}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="single-image-description-input"
                type="file"
                onChange={handleImageDescriptionInputChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack justifyContent={"center"} alignItems={"center"} py={3}>
        <Typography sx={{ ...ConstantStyle.text.titlePage, py: 10 }}>
          Image of Description
        </Typography>
        {product.data?.fileDescriptions.length > 0 ? (
          <ShowImageDes itemData={product.data?.fileDescriptions} />
        ) : (
          <>No File Descriptions Image</>
        )}
      </Stack>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        onClick={handleUpdateProduct}
      >
        Update Product
      </Button>
    </Stack>
  );
}

export default DisplayProduct;
