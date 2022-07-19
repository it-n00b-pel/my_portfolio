import React from "react";
import style from './Skill.module.scss'


type SkillPropsType = {
    title: string,
    img: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.img} alt=""/>
            </div>
            <h3>{props.title}</h3>
            {/*<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>*/}
        </div>
    );
};

export default Skill;