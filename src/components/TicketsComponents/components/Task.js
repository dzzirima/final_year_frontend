import { Avatar, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Task({ task1, onTglStatus }) {
  let task = {
    id:1,
    desc:"edhehdededehedhueeudede"
  }
  return (
    <div>
    <Card  variant="outlined"  key={task.id}>
      <div className="taskMainContainer">
        <div>
          <div className = "taskTitleNameContainer">
             <Avatar> N </Avatar>   <Box sx = {{ m:1}}/> <h4>{`Nasha`}</h4> <Box sx = {{ m:1}}/> <Typography variant = "body2"> 22/09/2021</Typography>
             </div>
          <p> 
            Eiusmod do sit eu nisi laborum fugiat proident minim deserunt sunt incididunt. Occaecat 
            sunt magna cillum sit adipisicing cupidatat consequat in adipisicing exercitation nostrud eu
             proident duis. Sint nulla exercitation amet anim aliqua laboris Lorem. Deserunt cupidatat eiusmod 
             aliqua veniam et exercitation sint Lorem cillum magna veniam cillum. Ea aliqua consequat tempor 
             culpa fugiat incididunt do. Minim est veniam do aliqua ullamco minim exercitation consequat do est cillum.
          </p>
          <div className="task-meta">
            {/* <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            /> */}
            {task.date}
          </div>
        </div>

        {/* <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div> */}
      </div>
    </Card>
    <Box className = "boxDivider" sx = {{height:2}}></Box>
    </div>
  );
}

export default Task;
