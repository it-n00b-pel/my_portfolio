import React from "react";
import style from "./Works.module.css"
import styleContainer from "../../src/common/styles/Container.module.css"
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h3 className={style.title}>My Works</h3>
                <div className={style.works}>
                    <Work title={"Projects Name"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Work title={"Projects Name"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Work title={"Projects Name"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>

                </div>
            </div>
        </div>
    );
};

export default Works;