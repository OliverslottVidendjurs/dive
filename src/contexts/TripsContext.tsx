import React, {createContext, useState} from "react";

export type TripType = {
    title: string,
    img: string,
    content: string
}

export type TripsContextProps = {
    trips: TripType[]
}

export const TripsContext = createContext<TripsContextProps>({} as TripsContextProps);

function TripsContextProvider(props: any){
    const ["trips"] = useState<TripType[]>([{
        title: "MALTA",
        content: "Oplev skønne malta og det helt fantasike dyreliv og sammenhold. Vi arrangerer dykkerejser til malta hele året rundt.",
        img: "malta.jpg"
    }])
}

export default TripsContextProvider;