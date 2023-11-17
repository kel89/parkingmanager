import * as React from "react";
import Layout from "../utils/Layout";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Scheduler from "../Partials/Scheduler";

export default function Reservation({}) {
	const { user } = useAuthenticator((context) => [context.user]);

	return (
		<>
			<Layout pageName="Reservation">
				<div className="flex flex-col p-4 items-center gap-4">
					<Scheduler />
					<div>List of Existing Reservations</div>
				</div>
			</Layout>
		</>
	);
}
