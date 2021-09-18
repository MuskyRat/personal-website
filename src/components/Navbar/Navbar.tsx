import React from "react";
import style from './Navbar.module.css';
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


const Navbar: React.FC = () => {
    
    return (
        <div className={style.wrapper}>
            <Navigation />
            <MobileNavigation />
        </div>
    )
    
};

export default Navbar;