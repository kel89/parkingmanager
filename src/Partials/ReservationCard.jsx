import { DeleteOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";

export default function ReservationCard({reservation, deleteReservation}){

    const parseTime = (t) => {
        let hour = parseInt(t.split(":")[0]);
        let m = hour <= 12 ? "am" : "pm";
        return (hour % 12 + 1) + m;
    }
    

    return (
        <div className='border rounded-md shadow-md p-3'>
            <div className='flex justify-between w-full'>
                <div>{reservation.resort}</div>
                <div>{dayjs(reservation.reserveTarget, 'YYYY-MM-DD').format("MMM DD, YYYY")}</div>
            </div>
            <div>
                To be reserved on {dayjs(reservation.reserveOn, "YYYY-MM-DD").format("MMM DD, YYYY")}
                &nbsp; at {parseTime(reservation.reserveTime)}
            </div>
            <div className='flex justify-end'>
                <IconButton aria-label='delete' onClick={() => deleteReservation(reservation.id)}>
                    <DeleteOutline />
                </IconButton>
            </div>
        </div>
    )
}