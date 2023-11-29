import * as React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";

export default function HelpPage({}) {

	return (
		<>
			<Layout pageName="Help">
				<div className="container mx-auto w-11/12 max-w-2xl">
					<h1 className="text-xl font-bold text-center">How to Use</h1>
                    <ul className='list-disc ml-4'>
                        <li className='mb-2'>Add Credentials for you resort parking account</li>
                        <li className='mb-2'>Go to the Schedule Page and schedule a reservation to be made</li>
                        <li className='mb-2'>Sit back, and chill while the reservation is automatically made</li>
                    </ul>
                    <p>On the scheudler page, there are a few fields to take note of. You have
                        to tell it they day on which you want the reservation to be made, and the
                        day you want the reservation made for. Its setup this way because Solitude
                        is opening new spots every sunday at 3pm, then each morning at 6am, so I wanted
                        to be able to set the program to fire off at those specific times.
                    </p>

                    <br/>
                    <h1 className="text-xl font-bold text-center">Still Having Problems?</h1>
                    <p>You can email me at <a href="mailto:kenlipke@me.com">kenlipke@me.com</a> or call me at 716-289-0526</p>
				</div>
			</Layout>
		</>
	);
}
