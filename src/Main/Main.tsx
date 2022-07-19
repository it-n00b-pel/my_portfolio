import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import photo_skills from '../assets/img/photoSkills.png';

const Main = () => {
    return (
        <div className={style.mainBlock} id="main">
            <div className={styleContainer.container}>
                <div className={style.personInfo}>
                    <span>HELLO</span>
                    <h1>I'm Palii Dmytro</h1>
                    <p>I am a person who has a
                        strong passion for programming.
                        I have experience in creating SPA
                        with React/Redux/TypeScript.
                        Now I am improving my skills in this
                        direction and expanding them with
                        new technologies.
                        Open for your suggestions.</p>
                </div>
                <div className={style.personPhoto}>
                    <img src={photo_skills} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;