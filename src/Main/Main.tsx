import React from "react";
import style from "./Main.module.css"
import styleContainer from '../../src/common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.personInfo}>
                    <span>Hi there</span>
                    <h1>I am Palii Dmytro</h1>
                    <p>I've been doing web design, front-end and back-end development for a year now.
                        Do you need a website design, site layout, or maybe a turnkey website?
                        Then contact me</p>
                </div>
                <div className={style.personPhoto}></div>
            </div>
        </div>
    );
};

export default Main;