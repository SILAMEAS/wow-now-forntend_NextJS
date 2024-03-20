import { Pagination, Stack } from "@mui/material";

export default function MSPagition({
  totalPage,
  setCurrentPage,
}: Readonly<{
  totalPage: number;
  setCurrentPage: any;
}>) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        color="primary"
        onClick={(e: any) => setCurrentPage(Number(e.target.innerText))}
        hideNextButton={true}
        hidePrevButton={true}
      />
    </Stack>
  );
}
