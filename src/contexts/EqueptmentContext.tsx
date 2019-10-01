import React, { createContext, useState } from "react";

export type EqueptmentType = {
    id: number,
    title: string,
    price: number,
    img: string
}

export type ContextProps = {
    Equeptments: EqueptmentType[]
}

export const EqueptmentContext = createContext<ContextProps>({} as ContextProps);

function EqueptmentContextProvider(props: any) {
    const [Equeptments] = useState<EqueptmentType[]>([
        {
            id: 1,
            img: "reg.jpg",
            title: "REGULATOR MED RESIST",
            price: 899
        },
        {
            id: 2,
            img: "fine.jpg",
            title: "REJSEFINNE",
            price: 999
        },
        {
            id: 3,
            img: "ur.jpg",
            title: "DYKKERUR",
            price: 1299
        },
        {
            id: 4,
            img: "hanske.jpg",
            title: "KOLDVANDS HANSKER",
            price: 899
        }
    ]);
    return (
        <EqueptmentContext.Provider value={{Equeptments}}>
            {props.children}
        </EqueptmentContext.Provider>
    );
}

export default EqueptmentContextProvider;