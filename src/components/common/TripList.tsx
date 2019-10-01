import React from "react";
import { TripType } from "../../contexts/TripsContext";
import Trip from "../home/Trip";
import styles from "./TripList.module.scss";

type TripProps = {
    trips: TripType[]
}
function TripList({trips}: TripProps){
    const tripList = trips.map(trip =>
        <Trip key={trip.id} trip={trip} />
    );
    return (
        <ul className={styles.list}>
            {tripList}
        </ul>
    );
}

export default TripList;