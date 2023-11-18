import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../utils/Layout";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Scheduler from "../Partials/Scheduler";
import ToReserveList from "../Partials/ToReserveList";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

export default function Reservation({}) {
  const { user } = useAuthenticator((context) => [context.user]);
  const client = generateClient();

  const [working, setWorking] = useState(false);
  const [reservationData, setReservationData] = useState();
  const [loadingReservations, setLoadingReservations] = useState(false);

  useEffect(() => {
    getReservations();
  }, []);

  // Hoist all gql logic here
  const getReservations = async () => {
	setLoadingReservations(true);
    // Make Query
    const res = await client.graphql({
      query: queries.listToReserves,
      variables: {
        filter: {
          user: {
            eq: user.userId,
          },
        },
      },
    });
    console.log(res);

    // Parse and Save Result
    setReservationData(res.data.listToReserves.items);
	setLoadingReservations(false);
  };

  const deleteReservation = async (id) => {
    setLoadingReservations(true);
    const res = await client.graphql({
      query: mutations.deleteToReserve,
      variables: { input: { id: id } },
    });
    console.log(res);
    await getReservations();
    setLoadingReservations(false);
  };

  const submitReservation = async (
    resort,
    reserveOn,
    reserveTarget,
    reserveTime
  ) => {
    // Disable inputs
    setWorking(true);
    // Organize data
    let data = {
      user: user.userId,
      resort: resort,
      reserveOn: reserveOn,
      reserveTarget: reserveTarget,
      reserveTime: reserveTime,
    };

    // Make graph request
    let newRes;
    try {
      newRes = await client.graphql({
        query: mutations.createToReserve,
        variables: { input: data },
      });
    } catch (err) {
      window.alert("There was an error... try again?");
    }

    console.log(newRes);
    setWorking(false);

	// Then get reservations
	getReservations();
  };

  return (
    <>
      <Layout pageName="Reservation">
        <div className="flex flex-col p-4 items-center gap-4">
          <Scheduler submitReservation={submitReservation} working={working} />
          <ToReserveList
            resList={reservationData}
            deleteReservation={deleteReservation}
            working={loadingReservations}
          />
        </div>
      </Layout>
    </>
  );
}
