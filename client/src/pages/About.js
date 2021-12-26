import classes from './About.module.css';

import BottomNav from '../components/BottomNav';
import MainNav from '../components/MainNav';
import PicsCollage from '../components/PicsCollage';
import AboutBrandFull from '../sections/AboutBrandFull';
import Testimonials from '../sections/Testimonials';


function About() {

    window.scrollTo({top: 0, behavior: 'instant'});


    return (
        <div className={classes.about}>
            <MainNav brand dark />
            <AboutBrandFull />
            <div className={classes.plx1}></div>
            <Testimonials />
            <div className={classes.plx2}></div>
            <div className={classes.gallery_div}>
                <PicsCollage />
            </div>
            <BottomNav />
        </div>
    );
}

export default About;