import React from "react";
import style from "./Work.module.css"

type WorkPropsType = {
    title: string
    img?: string
    text: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.worksPhoto}>
                <img src="" alt=""/>
                <a href="">Watch</a>
            </div>
            <h3 >{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default Work;