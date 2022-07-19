import React from "react";
import style from "./Nav.module.scss"


const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

    );
};

export default Nav;