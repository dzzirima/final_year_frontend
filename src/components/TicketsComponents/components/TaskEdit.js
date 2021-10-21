import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
  };
  return (
    <div className="card">
      <h3>Add Comment</h3>
      <form>
      <div className>

      <div className>
            <TextField
              variant="outlined"
              label="Description"
              name="description"
              multiline
                rows={5}
              required
              fullWidth
              // onChange={handleChange}
            />
          </div>
          <Box sx = {{marginTop:1}}> </Box>
          <div className>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default TaskEdit;
