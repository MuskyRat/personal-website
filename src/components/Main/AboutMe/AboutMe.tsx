import React from "react";
import style from './AboutMe.module.css'
import PageHeader from "../PageHeader/PageHeader";
import photo from '../../../assets/photo.jpg';

const AboutMe: React.FC = () => {

    return (
        <div className={style.AboutMe} id='about_me'>
            <PageHeader title={'About Me'} />
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <div className={style.Text}>
                        <h2>Hello! I'm Boris.</h2>
                        <p>
                            I am a frontend web developer from Russia.
                            I'm interested in music, programming, sports, healthy lifestyle, medicine, kinesiology, foreign languages, etc.
                            <br/>
                            I like to meet and communicate with new interesting people.
                            I like to travel and I'm planning to visit many beautiful countries.
                        </p>
                    </div>
                    <div className={style.Photo}>
                        <img className={style.Me} src={photo} alt="photo"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;