import { CircularProgress } from "@mui/material";
import ReservationCard from "./ReservationCard";

export default function ToReserveList({resList, deleteReservation, working}) {


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
