import React, {useRef, useState} from 'react';
import style from './Contact.module.scss';
import Title from '../common/components/Title';
import emails from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || '';
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || '';

const Contact = () => {
    const [isBlock, setIsBlock] = useState(false);
    const form = useRef('');
    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsBlock(true);
        emails.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).finally(() => {
            setIsBlock(false);
        });
    };

    return (

        <div className={style.contactBlock} id="contact">
            <form action="" className={style.formBlock}
                // @ts-ignore
                  ref={form} onSubmit={sendEmail}>
                <Title title={'Contact'}/>
                <input type="tel" name="phone" placeholder={'Phone'} disabled={isBlock}/>
                <input type="email" name="email" placeholder={'Email'} disabled={isBlock}/>
                <textarea name="message" id="" placeholder={'Comments'} disabled={isBlock}></textarea>
                <button type={'submit'} disabled={isBlock} className={isBlock ? style.blockBtn : ''}>SEND MESSAGE</button>
            </form>
        </div>
    );
};

export default Contact;