import { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";

export default function CredentialCard({ data, deleteCred, editCred }) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(data.username);
  const [password, setPassword] = useState(data.password);

  const save = async () => {
    setEditing(false);
    await editCred(data.id, username, password);
  };

  const _delete = async () => {
    setEditing(false);
    await deleteCred(data.id);
  }

  return (
    <div className="border rounded-md shadow-md p-3 flex justify-between">
      <div>
        <div>{data.resort}</div>
        <div>
          {editing ? (
            <TextField
              label="Username"
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            <div>
              <span className="text-bold">Username:</span> {data.username}
            </div>
          )}
        </div>
        <div>
          {editing ? (
            <TextField
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <span>Password: {data.password}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <IconButton onClick={() => _delete(data.id)}>
          <DeleteIcon />
        </IconButton>
        {editing ? (
          <>
            <IconButton onClick={save}>
              <SaveIcon />
            </IconButton>
            <IconButton onClick={() => setEditing(false)}>
              <CancelIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={() => setEditing(true)}>
            <EditIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}
