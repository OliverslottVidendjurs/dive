import React from "react";
import { EqueptmentType } from "../../contexts/EqueptmentContext";
import styles from "./DiveEqupment.module.scss";

type PropType = {
    equipment: EqueptmentType
}

function DiveEqupment({equipment}: PropType){
    return (
        <li className={styles.item}>
            <img src={`img/${equipment.img}`} alt={equipment.title}/>
            <h3>{equipment.title}</h3>
            <p>KR. {equipment.price},-</p>
        </li>
    );
}

export default DiveEqupment;