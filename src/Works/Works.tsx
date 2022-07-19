import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Work from './Work/Work';
import Title from '../common/components/Title';
import todoImage from '../assets/img/68747470733a2f2f636c69636b75702e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30312f746f2d646f2d6c6973742d617070732d3134303078313035302e706e67.png';
import socialImage from '../assets/img/socialNetWork.jpg';

const Works = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todo = {
        backgroundImage:`url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock} id="projects">
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.works}>
                    <Work style={social} title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Work style={todo} title={'ToDo List'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Work style={{backgroundImage:''}} title={'Projects Name'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;