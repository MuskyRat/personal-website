import React from "react";
import style from './Home.module.css';
import code from '../../../assets/code.jpg';
import {motion} from 'framer-motion';

const WaveLine: React.FC = () => {

    return (
        <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
                         stroke="#A06B99" strokeOpacity="0.1" strokeWidth="10"
                         initial={{strokeOpacity: 0, pathLength: 0, pathOffset: 1}} animate={{strokeOpacity: 1, pathLength: 1, pathOffset: 0}} transition={{duration: 2, ease: "easeInOut"}}
            />
        </svg>
    )

}

const Home: React.FC = () => {

    return (
        <div className={style.Home} id='home'>
            <WaveLine />
            <div className={style.Container}>
                <h1 className={style.Hello}>Hello, world!</h1>
                <h1>Welcome to my website!</h1>
            </div>
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 1.6}} className={style.Code} src={code} alt="code"/>

        </div>
    )

}

export default Home;