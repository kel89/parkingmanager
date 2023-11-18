import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

export default function Scheduler() {
	const { user } = useAuthenticator((context) => [context.user]);
	const client = generateClient();

	const [resort, setResort] = useState("Solitude");
	const [reserveOn, setReserveOn] = useState(new Date());
	const [reserveTarget, setReserveTarget] = useState();
	const [reserveTime, setReserveTime] = useState("3pm");
	const [working, setWorking] = useState(false);

	const handleResortChange = (e) => {
		setResort(e.target.value);
	};

	const submitReservation = async () => {
		// Disable inputs
		setWorking(true);
		// Organize data
		let data = {
			user: user.userId,
			resort: resort.toUpperCase(),
			reserveOn: dayjs(reserveOn).format("YYYY-MM-DD"),
			reserveTarget: dayjs(reserveTarget).format("YYYY-MM-DD"),
			reserveTime: reserveTime == "6am" ? "06:00:00.000" : "15:00:00.000"
		}

		// Make graph request
		let newRes;
		try {
			newRes = await client.graphql({
				query: mutations.createToReserve,
				variables: {input: data}
			});
		} catch (err) {
			window.alert("There was an error... try again?")
		}

		console.log(newRes);
		setWorking(false);
	};

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
					onChange={handleResortChange}
				>
					<MenuItem value="Solitude">Solitude</MenuItem>
					<MenuItem value="Brighton">Brighton</MenuItem>
					<MenuItem value="Alta">Alta</MenuItem>
				</Select>
			</FormControl>

			<div className="mt-2">When do you want the reservation made?</div>
			<DatePicker
				disabled={working}
				onChange={(date) => setReserveOn(dayjs(date).toDate())}
			/>

			<div className="mt-2">
				What date do you want the reservation made for?
			</div>
			<DatePicker
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
					onClick={submitReservation}
					disabled={working}
					className="bg-blue-500 text-white hover:bg-blue-700 rounded-md w-full py-5"
				>
					{working ? <CircularProgress color="primary"/> : <>Submit</>}
				</button>
			</div>
		</div>
	);
}
