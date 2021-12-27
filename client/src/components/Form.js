import classes from './Form.module.css';

import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

import Button from './Button';


function Form() {

    const name_ref = useRef();
    const phno_ref = useRef();
    const email_ref = useRef();
    const msg_ref = useRef();
    const form_ref = useRef();

    const [email_ack, set_email_ack] = useState({ack_msg: '', msg_color: ''});

    function sendEmail(event) {

        event.preventDefault();

        emailjs.sendForm('service_y9l0iij', 'template_w65ktnd', form_ref.current, 'user_SMC14jx8QdQyshYylLZvR')
        .then((result) => {
            console.log('Email sent: ' + result.text);
            set_email_ack({ack_msg: 'Sent', msg_color: '#25D366'});
        }, (error) => {
            console.log('Email error: ' + error.text);
            set_email_ack({ack_msg: 'Failed, try after some time', msg_color: 'red'});
        });
        
        event.target.reset();
    };

    function sendMail(event) {

        const mail_data = {
            name: name_ref.current.value,
            phno: phno_ref.current.value,
            email: email_ref.current.value,
            msg: msg_ref.current.value
        }

        event.preventDefault();

        fetch(
            'https://ksr-convention.herokuapp.com/mailToOffice',
            {
                method : 'POST',
                body : JSON.stringify(mail_data),
                headers : {
                    'content-type' : 'application/json'
                }
            }
        ).then((res) => {return res.json();})
        .then((status) => {
            
            console.log('Email status: ' + status);

            set_email_ack({
                ack_msg: status ? 'Sent' : 'Failed, try after some time',
                msg_color: status ? '#25D366' : 'red'
            });
        });

        event.target.reset();
    }


    return (
        <div className={classes.form_div}>
            <form id='form' className={classes.form} onSubmit={sendMail} ref={form_ref}>
                <div className={classes.output_div}>
                    <h2 style={{color: email_ack.msg_color}}>{email_ack.ack_msg}</h2>
                </div>
                <div className={classes.input_div}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required ref={name_ref} name='name'/>
                </div>
                <div className={classes.input_div}>
                    <label htmlFor="phno">Your Phone Number</label>
                    <input type="text" id="phno" required ref={phno_ref} name='phone'/>
                </div>
                <div className={classes.input_div}>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" ref={email_ref} name='email'/>
                </div>
                <div className={classes.input_div}>
                    <label htmlFor="msg">Your Message</label>
                    <textarea id="msg" rows="5" ref={msg_ref} name='message'></textarea>
                </div>
                <div className={classes.action}>
                    <Button text='SEND' color='#fff' bg='rgb(120,81,169,0.8)' />
                </div>
            </form>
        </div>
    );
}

export default Form;