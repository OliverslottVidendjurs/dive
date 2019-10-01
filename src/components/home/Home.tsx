import React from "react";
import styles from "./Home.module.scss";
import MostPopularDiveEqupment from "./MostPopularDiveEqupment";

function Home() {
    return (
        <div>
            <div className={styles.bigImg}>
                <div className={styles.quote}>
                    <h2>THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH</h2>
                    <p>JACQUES COUSTEAU</p>
                </div>
            </div>
            <div className={styles.containerMargin}>
                <section className={styles.section}>
                    <MostPopularDiveEqupment />
                </section>
            </div>
        </div>
    );
}

export default Home;