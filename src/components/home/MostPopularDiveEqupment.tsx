import React, { useContext } from "react";
import styles from "./MostPopularDiveEqupment.module.scss";
import { EqueptmentType, EqueptmentContext, ContextProps } from "../../contexts/EqueptmentContext";
import DiveEqupment from "./DiveEqupment";

function MostPopularDiveEqupment() {
    const { Equeptments } = useContext<ContextProps>(EqueptmentContext);

    const equipmentList = Equeptments.map(equipment =>
        <DiveEqupment equipment={equipment} key={equipment.id} />
    );
    return (
        <div>
            <div className={styles.titleContainer}>
                <h3>MEST POPULÆRE DYKKERUDSTYR</h3>
            </div>
            <ul className={styles.list}>
                {equipmentList}
            </ul>
        </div>
    );
}

export default MostPopularDiveEqupment;