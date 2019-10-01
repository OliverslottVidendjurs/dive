import React, { useContext } from "react";
import { TripsContextProps, TripsContext } from "../../contexts/TripsContext";
import Section from "./Section";
import TripList from "../common/TripList";

function Trips() {
    const { trips } = useContext<TripsContextProps>(TripsContext);

    return (
        <Section title="DYK UD I VERDEN" readMoreText="SE FLERE DESTINATIONER OG MULIGHEDER HER!" readmoreLink="/trips">
            <TripList trips={trips}/>
        </Section>
    );
}

export default Trips;