import React from "react";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerBlock}>
                <div>
                    <h3>Name</h3>
                </div>
                <div className={style.socialBlock}>
                   <div className={style.icon}>
                       <a href="">
                           <img src="" alt=""/>
                       </a>
                   </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                </div>
                <div>2022 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;