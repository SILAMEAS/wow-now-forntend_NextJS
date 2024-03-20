import { HandleReq } from "@/components/Utils/request/HandleReq";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Grid, MenuItem, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect } from "react";

type InputFieldProps = {
  product: any;
  setState: React.Dispatch<
    React.SetStateAction<{
      title: string;
      price: string;
      description: string;
      category: string;
      type: string;
    }>
  >;
  state: {
    title: string;
    price: string;
    description: string;
    category: string;
    type: string;
  };
};
const InputField = ({ product, setState, state }: InputFieldProps) => {
  const [chipDataCategories, setChipDataCategories] = React.useState<
    { value: string; label: string }[] | null
  >(null);
  // const [state, setState] = useState({
  //   title: product.data?.title,
  //   price: product.data?.price,
  //   description: product.data?.description,
  //   category: product.data?.category,
  // });

  const reqHandle = new HandleReq();
  const getCate = async () => {
    reqHandle.getCategory().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { value, label } = item;
            return { value, label };
          }
        });
        setChipDataCategories(modify);
      } else return null;
    });
  };
  useEffect(() => {
    getCate();
  }, [product.data.id]);

  const handleTitleChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handlePriceChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  const handleDescriptionChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleCategoryChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Title"
          defaultValue={state.title}
          onChange={handleTitleChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Price"
          defaultValue={state.price}
          onChange={handlePriceChange}
          fullWidth
          type="number"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyOutlinedIcon />
              </InputAdornment>
            ),
          }}
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Category"
          defaultValue={state.category}
          select
          onChange={handleCategoryChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        >
          {chipDataCategories?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          defaultValue={state.description}
          onChange={handleDescriptionChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};
export default InputField;
