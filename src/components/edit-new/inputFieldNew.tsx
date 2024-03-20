import { HandleReq } from "@/components/Utils/request/HandleReq";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Grid, MenuItem, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";

type InputFieldProps = {
  product: any;
  setState: React.Dispatch<
    React.SetStateAction<{
      title: string;

      description: string;
    }>
  >;
  state: {
    title: string;
    description: string;
  };
};
const InputFieldNew = ({ product, setState, state }: InputFieldProps) => {
  const [chipDataCategories, setChipDataCategories] = React.useState<
    { value: string; label: string }[] | null
  >(null);

  const reqHandle = new HandleReq();

  React.useMemo(() => {
    reqHandle.getCategory().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { id, label } = item;
            return { value: id, label };
          }
        });
        setChipDataCategories(modify);
      } else {
        return;
      }
    });
  }, [state, product]);

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
      <Grid item xs={12}>
        <TextField
          label="Title"
          defaultValue={product.data?.title}
          onChange={handleTitleChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={3} display={"none"}>
        <TextField
          label="Price"
          defaultValue={product.data?.price}
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
      <Grid item xs={3} display={"none"}>
        <TextField
          label="Category"
          defaultValue={product.data?.category}
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
          defaultValue={product.data?.description}
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
export default InputFieldNew;
