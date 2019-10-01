import React from "react";
import styles from "./SubPage.module.scss";

type SubPageProps = {
    title: string,
    children?: any
}

function SubPage({title, children}: SubPageProps){
    return (
        <div className={`${styles.subpage} containerMargin`}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default SubPage;