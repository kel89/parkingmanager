import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
	withAuthenticator,
	Button,
	Heading,
	Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
	const [count, setCount] = useState(0);

	return (
		<Authenticator hideSignUp={true}>
			{({ signOut, user }) => {
				return (
					<main>
						<h1>Hello {user.username}</h1>
						<button onClick={signOut}>Sign out</button>
					</main>
				);
			}}
		</Authenticator>
	);
}

// export default withAuthenticator(App);
export default App;
