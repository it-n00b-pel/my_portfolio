import React from 'react';
import style from './Work.module.scss';

type WorkPropsType = {
    title: string
    img?: string
    text: string
    style:  {
        backgroundImage: string
    }
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.worksPhotoContainer} style={props.style}>
                <a href="">Watch</a>
            </div>
           <div className={style.worksInfo}>
               <h3 className={style.workTitle}>{props.title}</h3>
               <p className={style.description}>{props.text}</p>
           </div>
        </div>
    );
};

export default Work;