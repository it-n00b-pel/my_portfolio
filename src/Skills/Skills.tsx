import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './Skill/Skill';
import Title from '../common/components/Title';
import html from '../assets/img/icons/html.svg';
import css from '../assets/img/icons/css.svg';
import react from '../assets/img/icons/react.svg';
import redux from '../assets/img/icons/redux.svg';
import git from '../assets/img/icons/github.svg';
import ts from '../assets/img/icons/ts.svg';
import js from '../assets/img/icons/js.svg';
import mui from '../assets/img/icons/mui.svg';
import axios from '../assets/img/icons/icons8-настройки-api-96.png';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'HTML5'} img={html}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'CSS3/SCSS'} img={css}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}><Skill title={'React'} img={react}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'Redux'} img={redux}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}><Skill title={'Js'} img={js}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}><Skill title={'Ts'} img={ts}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'Material UI'} img={mui}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'Git'} img={git}/></Tilt>
                    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}> <Skill title={'Axios'} img={axios}/></Tilt>
                </div>
                {/*<span className={style.description}>{}</span>*/}
            </div>
        </div>
    );
};

export default Skills;