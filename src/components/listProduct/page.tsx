"use client";
import logo from "@/asset/loading.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
// import Swal from "sweetalert2";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ConstantStyle } from "../../Constant/ConstantColor";
import DisplayProduct from "../All-Products/ProductDetail/components/DisplayProduct";
import { API_URL } from "../Utils/constant";
import { $headers } from "../Utils/reqHeader";
import { HandleReq } from "../Utils/request/HandleReq";
import NGDialog from "../ms-dailog/NGDialog";
import { useDialog } from "../ms-dailog/useDialog";
import { MSProductImageModify } from "../ms-image/MSImage";
import MSPagition from "../ms-pagination/MSPagition";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListProduct = () => {
  const handleReq = new HandleReq();
  const DialogUse = useDialog();
  const [selectId, setSelectId] = React.useState<number | null>(null);
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dataResponse, setDataResponse] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isError, setIsError] = React.useState<boolean>(false);
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  type ProductData = {
    id: number;
    title: string;
  };
  type ProductRow = {
    id: number;
    title: string;
    price: number;
    category: string;
    date: string;
    file: { uri: string }[];
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const formatDateString = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const fetchData = async () => {
    try {
      const data = await handleReq.getProduct({
        pageNumber: pageNumber - 1,
        pageSize: 10,
        search: searchValue,
      });
      setDataResponse(data);
      const formattedData = data.data.content.map((item: any) => ({
        ...item,
        date: formatDateString(item.date), // Format the date here
      }));
      setRows(formattedData);
      setFilteredRows(formattedData);
    } catch (error) {
      setIsError(true);
    }
  };

  const deleteProduct = async (productId: any) => {
    try {
      const response = await axios.delete(
        `${API_URL}api/v1/product/delete-product/${productId}`,
        {
          headers: $headers,
        }
      );
      fetchData(); // Call fetchData here
      if (response.status === 204) {
        // Successful deletion
        // Optionally, you can update the list of products here to reflect the deletion.
        // Fetch data again to update the product list
      } else {
        console.error("Failed to delete product");
        // Handle delete failure here (e.g., show an error message).
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error or server error here.
    }
  };

  const filterData = (searchText: string) => {
    const filtered = rows.filter((row: ProductData) =>
      row.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  const handleDeleteClick = (productId: any) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
      // Optionally, you can update the list of products after deletion here.
    }
  };
  React.useEffect(() => {
    if (searchValue !== "") {
      setPageNumber(1);
    }
    fetchData();
  }, [pageNumber, searchValue]);

  return (
    <>
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
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ ...ConstantStyle.text.titlePage }}>
              Update Product
            </Typography>
            <IconButton onClick={DialogUse.close}>
              <CloseOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
            </IconButton>
          </Stack>
        }
        contentDialog={<DisplayProduct productId={selectId} />}
      />
      <Stack spacing={3}>
        <Typography
          sx={{
            ...ConstantStyle.text.titlePage,
          }}
        >
          Products List
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <TextField
            size="small"
            value={searchValue}
            label="Search Products"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="outlined"
            endIcon={<AddCircleIcon />}
            sx={{ width: "200px", fontWeight: 600 }}
            onClick={() => router.push("/add-product")}
          >
            New Product
          </Button>
        </Stack>
        <Box height={10} />
      </Stack>

      {rows.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer
            sx={{
              height: `calc(100vh - 350px)`,
              ...ConstantStyle.scroll.scrollNormal,
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: ProductRow) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.id}>
                        <TableCell align="left">
                          <MSProductImageModify
                            src={row.file[0]?.uri ?? null}
                            alt={row.title}
                          />
                        </TableCell>
                        <TableCell align="left">{row?.title}</TableCell>
                        <TableCell align="left">
                          {row?.price}
                          <span> </span>$
                        </TableCell>
                        <TableCell align="left">{row?.category}</TableCell>
                        <TableCell align="left">{row?.date}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            {/* <Link href={`/update-product/${row.id}`}> */}
                            <IconButton
                              onClick={() => {
                                setSelectId(row.id);
                                DialogUse.open();
                              }}
                            >
                              <CreateOutlinedIcon
                                style={{
                                  fontSize: "20px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                                className="cursor-pointer"
                              />
                            </IconButton>

                            {/* </Link> */}
                            <IconButton
                              onClick={() => handleDeleteClick(row.id)}
                            >
                              <DeleteOutlineIcon
                                style={{
                                  fontSize: "20px",
                                  color: "darkred",
                                  cursor: "pointer",
                                }}
                              />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack p={"15px"} alignItems={"flex-end"}>
            {dataResponse && dataResponse.data.totalPages && (
              <MSPagition
                totalPage={dataResponse.data.totalPages}
                setCurrentPage={setPageNumber}
              />
            )}
          </Stack>
        </Paper>
      ) : (
        <Stack
          height={"60vh"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={logo} height={40} alt="LOGO" />
          <Typography>There is no product was created yet.</Typography>
          <Typography>
            To a create product, please click on <b>New Product</b>
          </Typography>
        </Stack>
      )}
    </>
  );
};
export default ListProduct;
