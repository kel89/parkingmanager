import * as React from "react";
import Layout from "../utils/Layout";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Reservation({}) {
	const { user } = useAuthenticator((context) => [context.user]);

	return (
		<>
			<Layout pageName="Reservation">
				<div>
					Schedule Reservation Here
					<br />
					{user.signInDetails.loginId}
				</div>
			</Layout>
		</>
	);
}
