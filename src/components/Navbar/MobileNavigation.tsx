import React, {useState} from "react";
import style from './Navbar.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {RiCloseCircleLine} from 'react-icons/ri'
import NavLinks from "./NavLinks";

const MobileNavigation: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    const openHandler = () => {
        setOpen(!open);
    };

    const openIcon = <CgMenuRound onClick={openHandler} className={style.hamburger} size='40px' color='white' />;

    const closeIcon = <RiCloseCircleLine onClick={openHandler} className={style.hamburger} size='40px' color='white' />;

    return (
        <nav className={style.mobileNavigation}>
            {open ? closeIcon : openIcon}
            {open && <NavLinks openHandler={openHandler} />}
        </nav>
    )

}

export default MobileNavigation;