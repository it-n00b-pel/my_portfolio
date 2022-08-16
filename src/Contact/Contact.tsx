import React, {useRef} from 'react';
import style from './Contact.module.scss';
import Title from '../common/components/Title';
import emails from '@emailjs/browser';

const a = process.env.REACT_APP_SERVICE_ID || '';
const b = process.env.REACT_APP_TEMPLATE_ID || '';
const c = process.env.REACT_APP_PUBLIC_KEY || '';
const Contact = () => {

    const form = useRef('');
    const sendEmail = (e: any) => {
        e.preventDefault();
        emails.sendForm(a, b, form.current, c)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className={style.contactBlock} id="contact">
            <form action="" className={style.formBlock}
                // @ts-ignore
                  ref={form} onSubmit={sendEmail}>
                <Title title={'Contact'}/>
                <input type="tel" name="phone" placeholder={'Phone'}/>
                <input type="email" name="email" placeholder={'Email'}/>
                <textarea name="message" id="" placeholder={'Comments'}></textarea>
                <button type={'submit'}>SEND MESSAGE</button>
            </form>
        </div>
    );
};

export default Contact;