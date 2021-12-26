import classes from './ContactDisplay.module.css';

import Button from '../components/Button';
import Form from '../components/Form';

import whatsapp_img from '../res/whatsapp.svg';


function ContactDisplay() {

    function open_whatsapp(number) {
        window.open('https://wa.me/' + number, '_blank');
    }

    
    return (
        <div className={classes.contact_display}>
            <div className={classes.outer_div}>
                <div className={classes.contact_info}>
                    <h2 className={classes.heading}>Contact Us</h2>
                    <div className={classes.underline}></div>
                    <h3 className={classes.sub_heading}>Contact us and book your next event.</h3>
                    <div className={classes.phone_no_div}>
                        <a href='tel:+917331106333'><h2 className={classes.phone_no}>+91&nbsp;73311&nbsp;06333</h2></a>
                        <a href='tel:+917331107333'><h2 className={classes.phone_no}>+91&nbsp;73311&nbsp;07333</h2></a>
                    </div>
                    <h3 className={classes.address}>
                        Sy.&nbsp;No:&nbsp;143/B, NH&nbsp;44, 
                        Kandlakoya&nbsp;Village, Medchal, Hyderabad, 
                        TS 501401.
                    </h3>
                    <a href='mailto:info@ksrconvention.com'><h3 className={classes.email}>info@ksrconvention.com</h3></a>
                    <a href='https://ksrconvention.com/'><h3 className={classes.email}>www.ksrconvention.com</h3></a>
                    <div className={classes.buttons_div}>
                        <Button img={whatsapp_img} color='#fff' bg='rgb(37,211,102,0.8)' 
                            text='+91&nbsp;73311&nbsp;06333' onclick={() => {open_whatsapp('917331106333');}} />
                        <Button img={whatsapp_img} color='#fff' bg='rgb(37,211,102,0.8)' 
                            text='+91&nbsp;73311&nbsp;07333' onclick={() => {open_whatsapp('917331107333');}} />
                    </div>
                </div>
                <Form />
            </div>
            <div className={classes.map_div}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30426.79716850078!2d78.49236!3d17.586124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9e9924335f7ea1a!2sKSR%20Convention!5e0!3m2!1sen!2sin!4v1639064922412!5m2!1sen!2sin" title='map1' allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
}

export default ContactDisplay;