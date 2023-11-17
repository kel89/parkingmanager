import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export default function Scheduler({}) {
	const { user } = useAuthenticator((context) => [context.user]);

	const [resort, setResort] = useState("Solitude");
	const [reserveOn, setReserveOn] = useState();
	const [reserveTarget, setReserveTarget] = useState();
	const [reserveTime, setReserveTime] = useState();

	const handleResortChange = (e) => {
		setResort(e.target.value);
	};

	return (
		<div className="p-3 border rounded-md shadow-md w-9/12 max-w-4xl">
			<h3 className="text-lg font-semibold">Schedule New Reservation</h3>
			<br />
			<FormControl fullWidth>
				<InputLabel>Resort</InputLabel>
				<Select
					id="resort-select"
					value={resort}
					label="Resort"
					onChange={handleResortChange}>
					<MenuItem value="Solitude">Solitude</MenuItem>
					<MenuItem value="Brighton">Brighton</MenuItem>
					<MenuItem value="Alta">Alta</MenuItem>
				</Select>
				{/* <DatePicker
					label="Reserve On"
					value={reserveOn}
					onChange={(val) => setReserveOn(val)}
				/> */}
			</FormControl>
		</div>
	);
}
