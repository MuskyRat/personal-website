import React from "react";
import style from './Skills.module.css'
import PageHeader from "../PageHeader/PageHeader";
import hackerMind from '../../../assets/hacker_mind.svg';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {useAnimation} from "framer-motion";

const Skills: React.FC = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });

    const animation1 = useAnimation();

    const animation2 = useAnimation();

    useEffect(() => {
        if(inView) {
            animation1.start({x: 0, transition: {duration: .7}});
            animation2.start({scale: 1, transition: {duration: .7}})
        }
        if(!inView) {
            animation1.start({x: '-100vw', transition: {duration: 1}})
            animation2.start({scale: 0, transition: {duration: 1}})
        }
    }, [inView]);

    return (
        <div className={style.Skills} id='skills'>
            <PageHeader title={'My skills'} />
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <div ref={ref} className={style.MySkills}>
                        <div className={style.Text}>
                            <p>
                                Below are programming languages, frameworks, libraries and technologies I've worked with at the moment.
                            </p>
                        </div>
                        <div className={style.HackerContainer}>
                            <motion.img animate={animation1} className={style.Hacker} src={hackerMind} alt="Hacker mind"/>
                        </div>
                        <div className={style.List}>
                            <motion.ul animate={animation2}>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Redux
                                </li>
                                <li>
                                    Typescript
                                </li>
                                <li>
                                    React-Redux
                                </li>
                                <li>
                                    Redux-Thunk
                                </li>
                                <li>
                                    React-Router-Dom
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    Formik
                                </li>
                                <li>
                                    WebSocket
                                </li>
                                <li>
                                    Uuid
                                </li>
                                <li>
                                    ClassNames
                                </li>
                                <li>
                                    Yup
                                </li>
                                <li>
                                    Git
                                </li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Skills;