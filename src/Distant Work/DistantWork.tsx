import React from "react";
import style from './DistantWork.module.css'

const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={style.distantWork}>
                <div className={style.title}>  <h3>Рассматриваю варианты удаленки </h3></div>
                <button>Нанять меня</button>
            </div>
        </div>

    );
};

export default DistantWork;