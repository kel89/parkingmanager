import * as React from "react";
import { useState } from "react";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function AddCredentials({createCredentials}) {
  const [resort, setResort] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [working, setWorking] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const submit = async () => {
    if (username === undefined || password === undefined || resort === undefined){
        window.alert("You need to fill out the fields");
        return;
    }
    setWorking(true);
    await createCredentials(username, password, resort);
    setWorking(false);
    setShowAdd(false);
  }

  return (
    <>
      {showAdd ? (
        <div className="p-3 border rounded-md shadow-md w-11/12 max-w-4xl">
          <FormControl fullWidth>
            <InputLabel>Resort</InputLabel>
            <Select
              id="resort-select"
              value={resort}
              label="Resort"
              disabled={working}
              onChange={(e) => setResort(e.target.value)}
            >
              <MenuItem value="Solitude">Solitude</MenuItem>
              <MenuItem value="Brighton">Brighton</MenuItem>
              <MenuItem value="Alta">Alta</MenuItem>
            </Select>

            <TextField
              label="Username"
              variant="standard"
              value={username}
              disabled={working}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="standard"
              value={password}
              disabled={working}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit} className='mt-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white px-4 py-2'>
                Submit {working ? <CircularProgress /> : null}
            </button>
          </FormControl>
        </div>
      ) : (
        <button
          disabled={working}
          onClick={() => setShowAdd(true)}
          className="rounded-md bg-green-500 hover:bg-green-700 text-white px-4 py-2"
        >
          Add Credentials
        </button>
      )}
    </>
  );
}
