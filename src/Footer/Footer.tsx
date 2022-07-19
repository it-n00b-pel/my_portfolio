import React from 'react';
import style from './Footer.module.scss';
import telegram from '../assets/img/icons/telegram.png';
import facebook from '../assets/img/icons/facebook.svg';
import phone from '../assets/img/icons/phone.svg';
import linkedin from '../assets/img/icons/линкедин.svg';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerBlock}>
                <div>
                    <h3>GET IN TOUCH</h3>
                </div>
                <div className={style.socialBlock}>
                    <div className={style.icon}>
                        <a href="https://t.me/it_n00b_pel" target="_blank" rel="noreferrer">
                            <img src={telegram} alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B6hzmL2X2QKKtOH0wqSNYnQ%3D%3D"
                           target="_blank"
                           rel="noreferrer">
                            <img src={linkedin} alt=""

                            />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="tel:+380951831006">
                            <img src={phone} alt=""/>
                        </a>
                    </div>
                </div>
                <div>© 2022, All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;