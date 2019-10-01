import React from "react";
import { EqueptmentType } from "../../contexts/EqueptmentContext";
import DiveEqupment from "./DiveEqupment";
import styles from "./EquipmentList.module.scss";

type EquipmentListProps = {
    equipments: EqueptmentType[]
}

function EquipmentList({equipments}: EquipmentListProps) {
    const equipmentList = equipments.map(equipment =>
        <DiveEqupment equipment={equipment} key={equipment.id} />
    );
    return (
        <ul className={styles.list}>
            {equipmentList}
        </ul>
    );
}

export default EquipmentList;