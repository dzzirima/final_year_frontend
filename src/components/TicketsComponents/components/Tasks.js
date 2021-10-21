import { Card } from "@mui/material";
import { Box } from "@mui/system";
import Task from "./Task";
function Tasks({ tasks, onTglStatus }) {
  return (
    <div>
        {tasks.map((task) => (
          <div  key={task.id}>
            <Task task={task} onTglStatus={onTglStatus} />
          </div>
          
        ))}
    
    </div>
  );
}

export default Tasks;
