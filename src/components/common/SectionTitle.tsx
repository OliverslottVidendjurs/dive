import React from "react";
import styles from "./SectionTitle.module.scss";

type PropType = {
    text: string
}

function SectionTitle({text}: PropType){
    return (
        <div className={styles.titleContainer}>
            <h3>{text}</h3>
        </div>
    );
}

export default SectionTitle;