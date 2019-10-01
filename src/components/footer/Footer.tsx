import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h3>
                    PRAKTISKE OPLYSNINGER
                </h3>
                <ul>
                    <li>Om Scuba Living</li>
                    <li>Kontakt</li>
                    <li>Handelsbetingelser</li>
                    <li>Persondatapolitik</li>
                    <li>Åbningstider</li>
                </ul>
            </div>
            <div>
                <h3>
                    PRAKTISKE OPLYSNINGER
                </h3>
                <ul>
                    <li>Hovedkategorier</li>
                    <li>Dykkerudstyr</li>
                    <li>Dykkerrejser</li>
                    <li>Dykkerkurser</li>
                    <li>Service</li>
                </ul>
            </div>
            <div>
                <h3>
                    SOCIALE MEDIER - FØLG OS HER:
                </h3>
                <ul>
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;