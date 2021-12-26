import classes from './Home.module.css';

import BottomNav from '../components/BottomNav';
import MainDisplay from '../sections/MainDisplay';
import AboutBrand from '../sections/AboutBrand';
import Testimonials from '../sections/Testimonials';
import ContactDisplay from '../sections/ContactDisplay';


function Home() {

    window.scrollTo({top: 0, behavior: 'instant'});
    

    return (
        <div className={classes.home}>
            <MainDisplay />
            <AboutBrand />
            <div className={classes.plx1}></div>
            <Testimonials />
            <div className={classes.plx2}></div>
            <ContactDisplay />
            <BottomNav />
        </div>
    );
}

export default Home;