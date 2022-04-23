import React from "react";
import style from './Contact.module.css'

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            {/*<div className={style.contact}>*/}
                <form action="" className={style.formBlock}>
                        <div className={style.contactTitle}>
                            <h3> Contact</h3>
                        </div>

                    <input type="tel" placeholder={"Phone"}/>
                    <input type="email" placeholder={"Email"}/>
                    <textarea name="" id="" ></textarea>
                    <button >SEND</button>
                </form>
            {/*</div>*/}
        </div>
    );
};

export default Contact;