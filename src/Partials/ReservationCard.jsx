import { DeleteOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";
import solitude from "../assets/solitude.png";
import brighton from "../assets/brighton.png";

export default function ReservationCard({reservation, deleteReservation}){

    const parseTime = (t) => {
        let hour = parseInt(t.split(":")[0]);
        let m = hour <= 12 ? "am" : "pm";
        return (hour % 12 + 1) + m;
    }

    const getResortIcon = () => {
        if (reservation.resort == "SOLITUDE") {
            return <img src={solitude} alt="Solitude"/>
        }
        else if (reservation.resort == "BRIGHTON"){
            return <img className="w-7" src={brighton} alt="Brighton"/>
        }
        else
        return <div>{reservation.resort}</div>
    }

    let expired = (dayjs()) > (dayjs(reservation.reserveOn))
    

    return (
        <div className={`border rounded-md shadow-md p-3 ${expired ? 'bg-gray-300' : ''}`}>
            <div className='flex justify-between w-full'>
                <div className='w-7'>{getResortIcon()}</div>
                <IconButton aria-label='delete' onClick={() => deleteReservation(reservation.id)}>
                    <DeleteOutline />
                </IconButton>           
                {/* <div>{dayjs(reservation.reserveTarget, 'YYYY-MM-DD').format("MMM DD, YYYY")}</div> */}
            </div>
                <div className='text-lg font-bold'>{dayjs(reservation.reserveTarget, 'YYYY-MM-DD').format("MMM DD, YYYY")}</div>
            <div>
                To be reserved on {dayjs(reservation.reserveOn, "YYYY-MM-DD").format("MMM DD, YYYY")}
                &nbsp; at {parseTime(reservation.reserveTime)}
            </div>
            <div className='flex justify-end'>
                
            </div>
        </div>
    )
}