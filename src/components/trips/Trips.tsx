import React, { useContext } from "react";
import TripList from "../common/TripList";
import { TripsContextProps, TripsContext } from "../../contexts/TripsContext";
import SubPage from "../common/SubPage";

function Trips(){
    const {trips} = useContext<TripsContextProps>(TripsContext);
    
    return (
        <SubPage title="Rejser">
            <TripList trips={trips}/>
        </SubPage>
    );
}

export default Trips;