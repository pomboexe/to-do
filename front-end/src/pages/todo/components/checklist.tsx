import { Delete } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const tasks = [
  { id: 1, name: "abc", completed: false },
  { id: 2, name: "task 2", completed: true },
];

export default function CheckList() {
  return (
    <FormGroup
      sx={{
        maxHeight: "50vh",
        overflow: "auto",
      }}
    >
      <Stack direction={"column"} spacing={1.5}>
        {tasks.map((item) => (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <FormControlLabel
              key={item.id}
              control={<Checkbox checked={item.completed} />}
              label={
                <Typography
                  sx={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.name}
                </Typography>
              }
            />
            <IconButton
              sx={{
                color: "rgba(237, 20, 20, 1)",
                ":hover": {
                  color: "rgba(237, 20, 20, 0.8)",
                },
              }}
            >
              <Delete />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </FormGroup>
  );
}
