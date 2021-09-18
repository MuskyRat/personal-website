import React from "react";
import style from './PageHeadre.module.css';

type PropsType = {
    title: string;
};

const PageHeader: React.FC<PropsType> = ({title}) => {


    return (
        <div className={style.Container}>
            <hr/>
            <h1>{title}</h1>
        </div>
    )

};

export default PageHeader;