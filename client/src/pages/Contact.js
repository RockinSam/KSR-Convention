import classes from './Contact.module.css';

import BottomNav from '../components/BottomNav';
import MainNav from '../components/MainNav';
import ContactDisplayFull from '../sections/ContactDisplayFull';

function Contact() {

    window.scrollTo({top: 0, behavior: 'instant'});


    return (
        <div className={classes.contact}>
            <MainNav brand dark />
            <ContactDisplayFull />
            <BottomNav />
        </div>
    );
}

export default Contact;