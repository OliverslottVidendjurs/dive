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
    //Some pictures are from www.scubastore.com (please don't sue me, I have no money :( )
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
        },
        {
            id: 5,
            img: "fullmask.jpg",
            title: "FULLMASK",
            price: 345
        },
        {
            id: 6,
            img: "speargun.jpg",
            title: "SPEARGUN",
            price: 999
        },
        {
            id: 7,
            img: "seac-warm-dry.jpg",
            title: "DRY SUIT",
            price: 2999
        },
        {
            id: 8,
            img: "cressi-corsica.jpg",
            title: "SNORKEL",
            price: 59
        }

    ]);
    return (
        <EqueptmentContext.Provider value={{Equeptments}}>
            {props.children}
        </EqueptmentContext.Provider>
    );
}

export default EqueptmentContextProvider;