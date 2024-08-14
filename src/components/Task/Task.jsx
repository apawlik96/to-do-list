import CloseIcon from "@mui/icons-material/Close";
import { Div, P, Input, Button, PMark } from "./Task.styles.js";
import { useState } from "react";

export const Task = ({ text }) => {
  const [markTask, setMarkTask] = useState(false);

  const handleCheckboxChange = () => {
    setMarkTask((prevMarkTask) => !prevMarkTask);
  };

  return (
    <Div>
      <Input
        type="checkbox"
        checked={markTask}
        onChange={handleCheckboxChange}
      />
      {!markTask ? <P>{text}</P> : <PMark>{text}</PMark>}

      <Button>
        <CloseIcon />
      </Button>
    </Div>
  );
};
