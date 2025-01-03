import { Delete } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
} from "@mui/material";

const tasks = [
  { id: 1, name: "abc", completed: false },
  { id: 2, name: "task 2", completed: true },
];

export default function CheckList() {
  return (
    <FormGroup>
      {tasks.map((item) => (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <FormControlLabel
            key={item.id}
            control={<Checkbox checked={item.completed} />}
            label={item.name}
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
    </FormGroup>
  );
}
