import * as React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";

export default function Home({}) {
	const { user } = useAuthenticator((context) => [context.user]);
	const navigate = useNavigate();

	console.log(user);

	return (
		<>
			<Layout pageName="Home">
				<div className="container mx-auto">
					<div className="p-5 flex flex-col">
						<div className="flex flex-col items-center text-center gap-4">
							<h2 className="text-xl font-bold">Parking Sites</h2>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-md w-64"
								onClick={() =>
									(window.location.href =
										"https://reservenski.parksolitude.com/")
								}>
								Solitude
							</button>
							<button
								className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded-full max-w-md w-64"
								onClick={() =>
									(window.location.href =
										"https://reservenski.parkbrightonresort.com/")
								}>
								Brighton
							</button>
							<button
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full max-w-md w-64"
								onClick={() =>
									(window.location.href = "https://reserve.altaparking.com")
								}>
								Alta
							</button>
						</div>
						<br />
						<br />
						<div className="text-center">
							<button
								onClick={() => navigate("/reservation")}
								className="border rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-4 max-w-md w-64">
								Schedule a Reservation
							</button>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
