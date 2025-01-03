import { Box, Typography } from "@mui/material";
import AddTask from "./components/add-task";
import CheckList from "./components/checklist";

export default function ToDo() {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #708090",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        padding: 3,
        gap: 3,
      }}
    >
      <Typography>TO - DO</Typography>
      <AddTask />
      <CheckList />
    </Box>
  );
}
