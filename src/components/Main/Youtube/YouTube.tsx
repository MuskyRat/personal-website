import React from "react";
import style from './YouTube.module.css'
import PageHeader from "../PageHeader/PageHeader";
import video1 from '../../../assets/Screenshot_41.png';
import video2 from '../../../assets/Screenshot_42.png';
import background from '../../../assets/background2.jpg';
import playButton from '../../../assets/YouTube_Silver_Play_Button_2.svg';
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {useAnimation} from "framer-motion";

const playBtnSvg = (url: string) => {
    return (
        <div className={style.PlayButton} onClick={(e) => window.open(url, '_blank')?.focus}>
            <motion.img className={style.Button} src={playButton} alt="playButton" whileHover={{scale: 1.2}} transition={{duration: .2}}/>
        </div>
    )
};

const youtubeVideo = (url: string, thumbnail: string, description: string) => {

    return (
        <div className={style.VideoContainer}>
            <div className={style.Thumbnail}>
                {playBtnSvg(url)}
                <img src={thumbnail} alt="thumbnail"/>
            </div>
            <div className={style.Text}>
                <p>{description}</p>
            </div>
        </div>
    )

};

const video1Description = "A cover of Don't cry by Guns'n'Roses"
const video2Description = "A cover of Patience by Exhausted"

const YouTube: React.FC = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView) {animation.start({scale: 1, transition: {
            type: 'spring', duration: 1.5, bounce: 0.4
            }})}
        if(!inView) {animation.start({scale: 0, transition: {duration: 1}})}
    }, [inView]);

    return (
        <div className={style.YouTube} id='youtube'>
            <img className={style.Background} src={background} alt="background"/>
            <PageHeader title={'YouTube'} />
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <div ref={ref} className={style.YouTubeContent}>
                        <div className={style.Paragraph}>
                            <p>
                                Here you can check how I play the guitar=)
                            </p>
                        </div>
                        <motion.div className={style.Videos} animate={animation} >
                            {youtubeVideo('https://youtu.be/BuZwXWjfpDQ', video1, video1Description)}
                            {youtubeVideo('https://youtu.be/buyP1jq1eS4', video2, video2Description)}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default YouTube;