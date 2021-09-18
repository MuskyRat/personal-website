import React from "react";
import style from './Navbar.module.css';
import NavLinks from "./NavLinks";

const Navigation: React.FC = () => {

    return (
        <nav className={style.navigation}>
            <NavLinks />
        </nav>
    )

}

export default Navigation;