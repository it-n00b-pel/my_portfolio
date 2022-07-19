import React from 'react';
import style from './Contact.module.scss';
import Title from '../common/components/Title';

const Contact = () => {
    return (
        <div className={style.contactBlock} id="contact">
            <form action="" className={style.formBlock}>
                <Title title={'Contact'}/>
                <input type="tel" placeholder={'Phone'}/>
                <input type="email" placeholder={'Email'}/>
                <textarea name="" id=""></textarea>
                <button>SEND MESSAGE</button>
            </form>
            {/*</div>*/}
        </div>
    );
};

export default Contact;