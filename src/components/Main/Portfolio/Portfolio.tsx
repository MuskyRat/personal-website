import React from "react";
import style from './Portfolio.module.css'
import PageHeader from "../PageHeader/PageHeader";
import background from '../../../assets/background4.jpg';
import sn from '../../../assets/logo_big.png';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import {motion} from 'framer-motion';

const Portfolio = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation1 = useAnimation();

    const animation2 = useAnimation();

    useEffect(() => {
        if(inView) {
            animation1.start({
                x: 0, transition: {type: "spring", duration: 1.5, bounce: 0.35}
            });
            animation2.start({
                x: 0, transition: {type: "spring", delay: .3, duration: 1.5, bounce: 0.35}
            })
        }
        if(!inView) {
            animation1.start({
                x: '-100vw'
            });
            animation2.start({
                x: '-100vw'
            });
        }
    }, [inView]);

    return (
        <div className={style.Portfolio} id='portfolio'>
            <img className={style.Background} src={background} alt="background"/>
            <PageHeader title={'Portfolio'} />
            <div className={style.Container} ref={ref}>
                <div className={style.Wrapper}>
                    <div className={style.Text}>
                        <p>
                            Here you can find info about projects I've worked on.
                        </p>
                    </div>
                    <motion.div className={style.Container2}>
                        <motion.div animate={animation1} className={style.Item1} onClick={(e) => window.open('https://muskyrat.github.io/social_network/', '_blank')?.focus()}>
                            <div className={style.PicItem1}>
                                <img className={style.SN} src={sn} alt="sn1" />
                            </div>
                            <div className={style.DiscItem1}>
                                <p>
                                    A demo social network website made for React.js developers.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div animate={animation2} className={style.Item2}></motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio;