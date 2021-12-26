import classes from './ContactDisplayFull.module.css';

import Button from '../components/Button';
import Form from '../components/Form';

import call_img from '../res/call.svg';
import whatsapp_img from '../res/whatsapp.svg';


function ContactDisplayFull() {

    function open_whatsapp(number) {
        window.open('https://wa.me/' + number, '_blank');
    }

    function call_phone(number) {
        document.location.href = 'tel:' + number;
    }

    
    return (
        <div className={classes.contact_display_full}>
            <div className={classes.top_div}>
                <div className={classes.contact_info}>
                    <h2 className={classes.heading}>Contact</h2>
                    <div className={classes.underline}></div>
                    <div className={classes.buttons_div}>
                        <h3 className={classes.sub_heading}>Phone:</h3>
                        <Button img={call_img} color='#fff' bg='rgb(120,81,169,0.8)'
                            text='+91&nbsp;73311&nbsp;06333' onclick={() => {call_phone('+917001106333');}} />
                        <Button img={call_img} color='#fff' bg='rgb(120,81,169,0.8)'
                            text='+91&nbsp;73311&nbsp;06733' onclick={() => {call_phone('+917001107333');}} />
                    </div>
                    <div className={classes.buttons_div}>
                        <h3 className={classes.sub_heading}>Whatsapp:</h3>
                        <Button img={whatsapp_img} color='#fff' bg='rgb(37,211,102,0.8)' 
                            text='+91&nbsp;73311&nbsp;06333' onclick={() => {open_whatsapp('917331106333');}} />
                        <Button img={whatsapp_img} color='#fff' bg='rgb(37,211,102,0.8)' 
                            text='+91&nbsp;73311&nbsp;07333' onclick={() => {open_whatsapp('917331107333');}} />
                    </div>
                </div>
                <Form />
            </div>
            <div className={classes.bottom_div}>
                <div className={classes.address_div}>
                    <h3 className={classes.sub_heading}>Address:</h3>
                    <h3 className={classes.address}>
                        Sy.&nbsp;No:&nbsp;143/B, NH&nbsp;44, 
                        Kandlakoya&nbsp;Village, Medchal, Hyderabad, 
                        TS 501401.
                    </h3>
                    <h3 className={classes.sub_heading}>Email:</h3>
                    <a href='mailto:info@ksrconvention.com'><h3 className={classes.email}>info@ksrconvention.com</h3></a>
                    <h3 className={classes.sub_heading}>Website:</h3>
                    <a href='https://ksrconvention.com/'><h3 className={classes.email}>www.ksrconvention.com</h3></a>
                </div>
                <div className={classes.map_div}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30426.79716850078!2d78.49236!3d17.586124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9e9924335f7ea1a!2sKSR%20Convention!5e0!3m2!1sen!2sin!4v1639064922412!5m2!1sen!2sin" title='map2' allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactDisplayFull;