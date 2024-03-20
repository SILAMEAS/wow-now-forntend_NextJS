"use client";
import { ConstantStyle, DefaultColor } from "@/Constant/ConstantColor";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { API_URL } from "../Utils/constant";
import { $headers } from "../Utils/reqHeader";
import { HandleReq } from "../Utils/request/HandleReq";
import { MSProductImageModify } from "../ms-image/MSImage";
type InputFileldProps = {
  e: any;
  receivedData: (e: any) => void;
};

function UploadProductForm() {
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImages, setProductImages] = useState<File[]>([]);
  const [category, setCategory] = useState("");
  const [isSpecial, setIsSpecial] = useState<boolean>(false);
  const [isInStock, setIsInStock] = useState<boolean>(true);
  const [type, setType] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImageDescription, setSelectedImageDescription] =
    useState<File | null>(null);
  const [descriptionImage, setDescriptionImage] = useState<File | null>(null);
  const [descriptionPreview, setDescriptionPreview] = useState<string | null>(
    null
  );

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  const [chipData, setChipData] = React.useState<
    { value: string; label: string }[] | null
  >(null);
  const [chipDataCategories, setChipDataCategories] = React.useState<
    { value: string; label: string }[] | null
  >(null);
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

    for (const element of files) {
      selectedImages.push(element);
    }

    setProductImages([...productImages, ...selectedImages]);
  };

  const handleImageClick = () => {
    const inputElement = document.getElementById("product-image");
    if (inputElement) {
      inputElement.click();
    }
  };

  const handleImageInputChange = (e: any) => {
    const files = e.target.files;
    const selectedImages = [];

    for (const element of files) {
      selectedImages.push(element);
    }

    setProductImages([...productImages, ...selectedImages]);
  };

  const handleImageDescriptionDrop = (e: any) => {
    e.preventDefault();
    setSelectedImageDescription(null);

    const files = e.dataTransfer.files;

    if (files.length === 1) {
      const descriptionImage = files[0] as File; // Use a type assertion to specify the type
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

  const deleteProduct = async (id: any, index: any) => {
    try {
      const response = await axios.delete(
        `${API_URL}api/v1/product/delete-product/${id}`,
        {
          headers: {
            Authorization: `Basic ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 204 || response.status === 200) {
        // Successful deletion

        // Remove the image from the local state
        const updatedImages = [...productImages];
        updatedImages.splice(index, 1);
        setProductImages(updatedImages);
      } else {
        console.error("Failed to delete product");
        // Handle delete failure here (e.g., show an error message).
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error or server error here.
    }
  };

  const handleImageDelete = (image: any, index: any) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedImages = [...productImages];
      updatedImages.splice(index, 1);
      setProductImages(updatedImages);
    }
  };

  const handleUploadMoreImages = () => {
    const element = document.getElementById("product-image");
    element?.click();
  };

  const handlePostImageDes = async (e: any, id: number) => {
    e.preventDefault();
    const formData = new FormData();
    if (descriptionImage) {
      formData.append("files", descriptionImage);
      try {
        const response = await axios.post(
          `${API_URL}api/v1/product/files/${id}/images-description`,
          formData,
          {
            headers: $headers,
          }
        );

        if (response.status === 200) {
          setOpenSnackbar(true);
        } else {
          console.error("Upload failed");
          // Handle upload failure here (e.g., show an error message).
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle network error or server error here.
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!productName || !productPrice || !category) {
      alert("Please fill in all required fields.");
      return;
    }
    const parsedProductPrice = parseFloat(productPrice);

    if (isNaN(parsedProductPrice) || parsedProductPrice <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    const formData = new FormData();
    formData.append("title", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("category", category);
    formData.append("productCode", "123");
    formData.append("ownerId", "12");
    formData.append("isSpecial", isSpecial.toString());
    formData.append("isInStock", isInStock.toString());
    formData.append("type", type);

    for (const element of productImages) {
      formData.append("files", element);
    }
    try {
      const response = await axios.post(
        `${API_URL}api/v1/product/files`,
        formData,
        {
          headers: $headers,
        }
      );
      if (response.status === 200) {
        handlePostImageDes(e, response.data.data.id);
        setOpenSnackbar(true);

        // Optionally, you can redirect the user or show a success message.
      } else {
        console.error("Upload failed");
        // Handle upload failure here (e.g., show an error message).
      }
      setLoading(false);
      router.push("/all-products");
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("Product uploaded successfully");

      // Handle network error or server error here.
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const reqHandle = new HandleReq();
  // get type
  const getType = async () => {
    reqHandle.getType().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { label, value } = item;
            return { value, label };
          }
        });
        setChipData(modify);
      } else return null;
    });
  };
  const getCate = async () => {
    reqHandle.getCategory().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { label, value } = item;
            return { value: value, label };
          }
        });
        setChipDataCategories(modify);
      } else return null;
    });
  };
  React.useMemo(() => {
    getType();
    getCate();
  }, []);

  return (
    <Stack>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>
        Create new Product
      </Typography>
      <Stack>
        <Stack
          style={{
            padding: "50px",
            border: isDragging ? "2px dashed #ccc" : "2px solid transparent",
          }}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* <Button onClick={handlePostImageDes}>Heng</Button> */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              {/* IMG OF PRODUCT */}
              <Stack>
                {productImages.length > 0 ? (
                  <div>
                    {productImages.map((image, index) => (
                      <Stack
                        key={URL.createObjectURL(image)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            marginRight: "10px",
                          }}
                        >
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
                      </Stack>
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
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={7}
                    sx={{
                      border: "2px dashed #ccc",
                    }}
                    onClick={handleImageClick}
                  >
                    <CloudUploadIcon
                      style={{ fontSize: "40px", color: DefaultColor }}
                    />
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
              </Stack>
              {/* ========== Product Detail ======== */}
              <Grid container justifyContent={"space-between"}>
                <Grid item lg={5}>
                  {/* Product Name */}
                  <TextField
                    label="Product Name"
                    fullWidth
                    variant="outlined"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </Grid>
                <Grid item lg={2}>
                  {/* Product Price */}
                  <TextField
                    label="Price"
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoneyOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    variant="outlined"
                    required
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </Grid>
                <Grid item lg={2}>
                  {/* Product Category */}
                  <TextField
                    id="outlined-basic"
                    label="Category"
                    select
                    variant="outlined"
                    onChange={handleCategoryChange}
                    value={category}
                    sx={{ width: "100%" }}
                  >
                    {chipDataCategories?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={2}>
                  {/* Product Type */}
                  <TextField
                    id="outlined-basic"
                    label="Type"
                    select
                    variant="outlined"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    sx={{ minWidth: "100%" }}
                  >
                    {chipData?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* ========== Product Description ======== */}
              <Stack
                direction={"row"}
                spacing={5}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {/* ========== Product Description Type = ======== */}
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
                {/* ========== Product Description ======== */}
                <TextField
                  label="Product Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  sx={{ width: "90%" }}
                />
              </Stack>
              {/* ========== Product IMG Description ======== */}
              <Stack>
                {selectedImageDescription ? (
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Image
                      src={descriptionPreview || ""}
                      alt={`Description Preview`}
                      width={100}
                      height={100}
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
                  </Stack>
                ) : (
                  <Stack
                    p={7}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "2px dashed #ccc",

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
                      <CloudUploadIcon
                        style={{ fontSize: "40px", color: DefaultColor }}
                      />
                      <Typography>
                        {selectedImageDescription
                          ? (selectedImageDescription as File).name
                          : "Drag & Drop or Click to Upload Product Image Description"}
                      </Typography>
                    </div>
                    <div>{/* You can add additional content here */}</div>
                  </Stack>
                )}
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="single-image-description-input"
                  type="file"
                  onChange={handleImageDescriptionInputChange}
                />
              </Stack>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  width: "100%",
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loading ? <CircularProgress /> : " Upload Product"}
              </Button>
            </Stack>
          </form>
        </Stack>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000} // Adjust the duration as needed
          onClose={handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity="success"
            onClose={handleCloseSnackbar}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Stack>
    </Stack>
  );
}

export default UploadProductForm;
