import React, {useContext} from "react";
import { ContextProps, EqueptmentContext } from "../../contexts/EqueptmentContext";
import EquipmentList from "../common/EquipmentList";
import styles from "./Equipment.module.scss";
import SubPage from "../common/SubPage";

function Equipment() {
    const { Equeptments } = useContext<ContextProps>(EqueptmentContext);

    return (
        <SubPage title="Udstyr">
            <EquipmentList equipments={Equeptments}/>
        </SubPage>
    );
}

export default Equipment;