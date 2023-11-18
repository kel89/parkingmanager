import { useState } from "react";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "antd";

export default function Scheduler({submitReservation, working}) {
	

	const [resort, setResort] = useState("Solitude");
	const [reserveOn, setReserveOn] = useState(new Date());
	const [reserveTarget, setReserveTarget] = useState();
	const [reserveTime, setReserveTime] = useState("3pm");

	const handleSubmission = async () => {
		await submitReservation(
			resort.toUpperCase(),
			dayjs(reserveOn).format("YYYY-MM-DD"),
			dayjs(reserveTarget).format("YYYY-MM-DD"),
			reserveTime == "6am" ? "06:00:00.000" : "15:00:00.000"
		);

	}


	return (
		<div className="p-3 border rounded-md shadow-md w-11/12 max-w-4xl">
			<h3 className="text-lg font-semibold">Schedule New Reservation</h3>
			<br />
			<FormControl fullWidth>
				<InputLabel>Resort</InputLabel>
				<Select
					id="resort-select"
					value={resort}
					label="Resort"
					disabled={working}
					onChange={e => setResort(e.target.value)}
				>
					<MenuItem value="Solitude">Solitude</MenuItem>
					<MenuItem value="Brighton">Brighton</MenuItem>
					<MenuItem value="Alta">Alta</MenuItem>
				</Select>
			</FormControl>

			<div className="mt-2">When do you want the reservation made?</div>
			<DatePicker
				inputReadOnly
				disabled={working}
				onChange={(date) => setReserveOn(dayjs(date).toDate())}
			/>

			<div className="mt-2">
				What date do you want the reservation made for?
			</div>
			<DatePicker
				inputReadOnly
				disabled={working}
				onChange={(date) => setReserveTarget(dayjs(date).toDate())}
			/>

			<div>
				<div className="mt-2">
					What time do you want the reservation to be made?
				</div>
				<Select
					id="resort-select"
					value={reserveTime}
					label="Make Reservation At"
					disabled={working}
					onChange={(e) => setReserveTime(e.target.value)}
				>
					<MenuItem value="6am">6am</MenuItem>
					<MenuItem value="3pm">3pm</MenuItem>
				</Select>
			</div>

			<div className="mt-4">
				<button
					onClick={handleSubmission}
					disabled={working}
					className="bg-blue-500 text-white hover:bg-blue-700 rounded-md w-full py-5"
				>
					{working ? <CircularProgress color="primary"/> : <>Submit</>}
				</button>
			</div>
		</div>
	);
}
