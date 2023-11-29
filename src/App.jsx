import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
	withAuthenticator,
	Button,
	Heading,
	Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Credentials from "./Pages/Credentials";
import HelpPage from "./Pages/Help";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/reservation",
		element: <Reservation />,
	},
	{
		path: "/credentials",
		element: <Credentials />,
	},
	{
		path: "/help",
		element: <HelpPage />
	}
]);

function App({ signOut, user }) {

	return (
		<Authenticator hideSignUp={true}>
			<RouterProvider router={router} />
		</Authenticator>
	);
	// return (
	// 	<Authenticator hideSignUp={true}>
	// 		{({ signOut, user }) => {
	// 			return (
	// 				<main>
	// 					<h1 className="text-xl font-bold underline">
	// 						Hello {user.username}
	// 					</h1>
	// 					<button onClick={signOut}>Sign out</button>
	// 				</main>
	// 			);
	// 		}}
	// 	</Authenticator>
	// );
}

// export default withAuthenticator(App);
export default App;
