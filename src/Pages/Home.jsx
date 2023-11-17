import * as React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Layout from "../utils/Layout";

export default function Home({}) {
	const { user } = useAuthenticator((context) => [context.user]);

	console.log(user);

	return (
		<>
			<Layout pageName="Home">
				<div>
					Home Page
					<br />
					{user.signInDetails.loginId}
				</div>
			</Layout>
		</>
	);
}
