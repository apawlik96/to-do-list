import CloseIcon from "@mui/icons-material/Close";
import { Div, P, Input, Button } from "./Task.styles.js";

export const Task = ({ text }) => {
  return (
    <Div>
      <Input type="checkbox" />
      <P>{text}</P>
      <Button>
        <CloseIcon />
      </Button>
    </Div>
  );
};
