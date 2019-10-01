import React, { useContext } from "react";
import { EqueptmentContext, ContextProps, EqueptmentType } from "../../contexts/EqueptmentContext";
import Section from "./Section";
import EquipmentList from "../common/EquipmentList";

function MostPopularDiveEqupment() {
    const { Equeptments } = useContext<ContextProps>(EqueptmentContext);

    let randomEquiptments: EqueptmentType[] = [];
    //Recursive function
    function getUniqueEquipment(): EqueptmentType{
        let randomNumber = Math.floor(Math.random() * Equeptments.length);
        let randomEquiptment = Equeptments[randomNumber];
        //Is the equipment already added? If yes, (try to) find another one.  
        if(randomEquiptments.find(x=> x.id === randomEquiptment.id)){
            return getUniqueEquipment();
        }
        return randomEquiptment;
    }

    for(var i = 0; i < 4; i++){        
        randomEquiptments.push(getUniqueEquipment());
    } 
    
    return (
        <Section title="MEST POPULÆRE DYKKERUDSTYR" readMoreText="SE MERE LÆKKERT UDSTYR HER!" readmoreLink="/equipment">
            <EquipmentList equipments={randomEquiptments}/>
        </Section>
    );
}

export default MostPopularDiveEqupment;