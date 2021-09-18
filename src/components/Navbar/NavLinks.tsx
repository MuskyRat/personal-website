import React from "react";
import {motion} from 'framer-motion';

type PropsType = {
    openHandler?: () => void;
}

const NavLinks: React.FC<PropsType> = ({openHandler}) => {

    const animateFrom = {opacity: 0, y: -40};

    const animateTo = {opacity: 1, y: 0};

    return (
        <ul>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={openHandler}>
                <a href="/personal-website/#home">Home</a>
                {/*<a href="/#home">Home</a>*/}
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.08}} onClick={openHandler}>
                <a href="/personal-website/#about_me">About me</a>
                {/*<a href="/#about_me">About me</a>*/}
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.11}} onClick={openHandler}>
                <a href="/personal-website/#skills">Skills</a>
                {/*<a href="/#skills">Skills</a>*/}
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.14}} onClick={openHandler}>
                <a href="/personal-website/#portfolio">Portfolio</a>
                {/*<a href="/#portfolio">Portfolio</a>*/}
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.17}} onClick={openHandler}>
                <a href="/personal-website/#youtube">YouTube</a>
                {/*<a href="/#youtube">YouTube</a>*/}
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={openHandler}>
                <a href="/personal-website/#contacts">Contacts</a>
                {/*<a href="/#contacts">Contacts</a>*/}
            </motion.li>
        </ul>
    )

}

export default NavLinks;