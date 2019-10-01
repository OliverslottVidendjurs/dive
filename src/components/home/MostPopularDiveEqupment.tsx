import React, { useContext } from "react";
import styles from "./MostPopularDiveEqupment.module.scss";
import { EqueptmentContext, ContextProps } from "../../contexts/EqueptmentContext";
import DiveEqupment from "./DiveEqupment";
import SectionTitle from "../common/SectionTitle";

function MostPopularDiveEqupment() {
    const { Equeptments } = useContext<ContextProps>(EqueptmentContext);

    const equipmentList = Equeptments.map(equipment =>
        <DiveEqupment equipment={equipment} key={equipment.id} />
    );
    return (
        <div>
            <SectionTitle text="MEST POPULÆRE DYKKERUDSTYR"/>
            <ul className={styles.list}>
                {equipmentList}
            </ul>
            <p className={styles.more}>SE MERE LÆKKERT UDSTYR HER!</p>
        </div>
    );
}

export default MostPopularDiveEqupment;