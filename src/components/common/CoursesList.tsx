import React from "react";
import styles from "./CoursesList.module.scss";
import logo from "../../assets/img/PADI.png";

function CoursesList() {
    return (
        <div className={styles.box}>
            <div className={styles.infoText}>
                <h3>TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</h3>
                <p>Her finder du set stort udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI organisationen. Når du vælger at tage et dykkercertifiktat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.</p>
                <p>Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente instruktører.</p>
            </div>
            <div className={styles.imgWrapper}>
                <img src={logo} alt="Et billede af PADIs logo" />
            </div>
        </div>
    );
}

export default CoursesList;