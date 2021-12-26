import classes from './MainNav.module.css';

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PageNav from './PageNav';
import NavContext from '../store/nav-context';
import CentreDiv from './CentreDiv';

import menu_img from '../res/menu.svg'
import close_img from '../res/close.svg'


function MainNav(props) {

    const nav_context = useContext(NavContext);

    let history = useHistory();

    let brand_tag = props.brand && <span className={classes.brand}>KSR CONVENTION</span>;


    return (
        <header className={classes.header} style={{backgroundColor: props.dark ? '#1F2022' : 'none'}}>
            <div className={classes.brand_div} onClick={() => {history.push('/');}}><CentreDiv>{brand_tag}</CentreDiv></div>
            <button className={classes.toggle} onClick={() => {nav_context.toggle_nav();}}>
                <img src={nav_context.is_active ? close_img : menu_img} alt='' />
            </button>
            <PageNav collapse />
        </header>
    );
}

export default MainNav;