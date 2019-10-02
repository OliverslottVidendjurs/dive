import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import MostPopularDiveEqupment from "./MostPopularDiveEqupment";
import Trips from "./Trips";
import Courses from "./Courses";

function Home() {
    const imageStyle = {
        backgroundImage: "url(img/scuba2.jpg)"
    }
    return (
        <div>
            <div className={styles.bigImg} style={imageStyle}>
                <div className={styles.quote}>
                    <h2>THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH</h2>
                    <p>JACQUES COUSTEAU</p>
                </div>
            </div>
            <div className="containerMargin">
                <MostPopularDiveEqupment />
                <Trips />
                <Courses />
            </div>
        </div>
    );
}

export default Home;