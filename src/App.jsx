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

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/reservation",
		element: <Reservation />,
	},
]);

function App({ signOut, user }) {
	const [count, setCount] = useState(0);

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
