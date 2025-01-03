import { Add } from "@mui/icons-material";
import { IconButton, Paper, TextField } from "@mui/material";

export default function AddTask() {
  return (
    <Paper
      sx={{
        borderRadius: 5,
        flex: 1,
        display: "flex",
        overflow: "hidden",
        justifyContent: "space-between",
        padding: 1,
        gap: 1,
      }}
    >
      <TextField
        variant={"standard"}
        slotProps={{
          input: {
            style: {
              width: "100%",
              flexGrow: 1,
              borderRadius: "10px",
              height: "2.5em",
              boxSizing: "border-box",
              backgroundColor: "#fff",
              border: "none",
            },
          },
        }}
        sx={{
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        }}
      />
      <IconButton
        sx={{
          border: "1px solid rgba(100,100,100,0.5)",
          backgroundColor: "rgba(30, 81, 123,1)",
          transition: "all",
          color: "white",
          ":hover": {
            backgroundColor: "rgba(30, 81, 123,0.5)",
          },
        }}
      >
        <Add />
      </IconButton>
    </Paper>
  );
}
