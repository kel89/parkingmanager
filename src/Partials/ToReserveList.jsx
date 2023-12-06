import { CircularProgress } from "@mui/material";
import ReservationCard from "./ReservationCard";

export default function ToReserveList({resList, deleteReservation, working}) {


  const sortFn = (a, b) => {
    // Convert date strings to Date objects
    const dateA1 = new Date(a.reserveTarget);
    const dateB1 = new Date(b.reserveTarget);

    if (dateA1 < dateB1) {
      return -1;
    } else if (dateA1 > dateB1) {
      return 1;
    } else {
      // If reserveTarget is equal, compare d2
      const dateA2 = new Date(a.reserveOn);
      const dateB2 = new Date(b.reserveOn);

      if (dateA2 < dateB2) {
        return -1;
      } else if (dateA2 > dateB2) {
        return 1;
      } else {
        return 0; // If both reserveTarget and reserveOn are equal
      }
    }
  }

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
          {resList.sort(sortFn).map((res) => (
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
