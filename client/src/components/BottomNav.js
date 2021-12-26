import classes from './BottomNav.module.css';

import PageNav from './PageNav';
import CentreDiv from './CentreDiv';


function BottomNav() {
    
    return (
        <footer className={classes.footer}>
            <CentreDiv><span className={classes.brand}>KSR CONVENTION</span></CentreDiv>
            <CentreDiv><PageNav divider='&#x25cf;' /></CentreDiv>
        </footer>
    );
}

export default BottomNav;