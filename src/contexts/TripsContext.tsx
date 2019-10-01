import React, {createContext, useState} from "react";

export type TripType = {
    id: number,
    title: string,
    img: string,
    content: string
}

export type TripsContextProps = {
    trips: TripType[]
}

export const TripsContext = createContext<TripsContextProps>({} as TripsContextProps);

function TripsContextProvider(props: any){
    const [trips] = useState<TripType[]>([{
        id: 1,
        title: "MALTA",
        content: "Oplev skønne malta og det helt fantasike dyreliv og sammenhold. Vi arrangerer dykkerejser til malta hele året rundt.",
        img: "malta.jpg"
    },
    {
        id: 2,
        title: "NORGE",
        content: "Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i verden!",
        img: "norge.JPG"
    }]);
    
    return (
        <TripsContext.Provider value={{trips}}>
            {props.children}
        </TripsContext.Provider>
    );
}

export default TripsContextProvider;