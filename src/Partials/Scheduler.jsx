import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "antd";

export default function Scheduler({}) {
	const { user } = useAuthenticator((context) => [context.user]);

	const [resort, setResort] = useState("Solitude");
	const [reserveOn, setReserveOn] = useState(new Date());
	const [reserveTarget, setReserveTarget] = useState();
	const [reserveTime, setReserveTime] = useState("3pm");

	const handleResortChange = (e) => {
		setResort(e.target.value);
	};

	const handleDateChange = (date, dateString) => {
		console.log(date);
		console.log(dateString);
		console.log(dayjs(date).toDate());
		setReserveOn(dayjs(date).toDate());
	};

	const seeValues = () => {
		console.log(resort);
		console.log(reserveOn);
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
			</FormControl>

			<div className="mt-2">When do you want the reservation made?</div>
			<DatePicker onChange={(date) => setReserveOn(dayjs(date).toDate())} />

			<div className="mt-2">
				What date do you want the reservation made for?
			</div>
			<DatePicker onChange={(date) => setReserveTarget(dayjs(date).toDate())} />

			<div>
				<div className="mt-2">
					What time do you want the reservation to be made?
				</div>
				<Select
					id="resort-select"
					value={reserveTime}
					label="Make Reservation At"
					onChange={(e) => setReserveTime(e.target.value)}>
					<MenuItem value="6am">6am</MenuItem>
					<MenuItem value="3pm">3pm</MenuItem>
				</Select>
			</div>

			<div className="mt-4">
				<button className="bg-blue-500 text-white hover:bg-blue-700 rounded-md w-full py-5">
					Submit
				</button>
			</div>
		</div>
	);
}
