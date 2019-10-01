import React from "react";
import { TripType } from "../../contexts/TripsContext";
import styles from "./Trip.module.scss";

type TripProps = {
    trip: TripType
}

function Trip({ trip }: TripProps) {
    return (
        <li className={styles.trip}>
            <img src={`img/${trip.img}`} alt="" />
            <div className={styles.blackBox}>
                <h3>{trip.title}</h3>
                <p>{trip.content}</p>
            </div>
        </li>
    );
}

export default Trip;