import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';
import ReservationCard from "./ReservationCard";

export default function ToReserveList() {
  const { user } = useAuthenticator((context) => [context.user]);
  const client = generateClient();

  const [resList, setResList] = useState();
  const [working, setWorking] = useState(false);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = async () => {
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
    setResList(res.data.listToReserves.items);
  };

  const deleteReservation = async (id) => {
    setWorking(true);
    const res = await client.graphql({
        query: mutations.deleteToReserve,
        variables: {input: {id: id}}
    });
    console.log(res);
    await getReservations();
    setWorking(false);
  };

  return (
    <div className="w-11/12 max-w-3xl">
      <h1 className="text-lg font-semibold text-center">
        Your Scheduled Reservations
      </h1>
      {resList == undefined || working ? (
        <div className="w-full flex flex-col mt-4 items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3">
          {resList.map((res) => (
            <ReservationCard
              reservation={res}
              deleteReservation={deleteReservation}
              key={res.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
