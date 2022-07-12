import React from 'react';
import style from './Title.module.scss';

type TitlePropsType = {
    title: string
}

const Title: React.FC<TitlePropsType> = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Title;