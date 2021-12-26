import classes from './PageNav.module.css';

import { NavLink  } from 'react-router-dom';
import { useContext } from 'react';

import NavContext from '../store/nav-context';
import CentreDiv from './CentreDiv';


function PageNav(props) {

    const nav_context = useContext(NavContext);

    let sep = null;

    if (props.divider) {
        sep = <span className={classes.divider}>{props.divider}</span>;
    }

    const links_data = [
        {name: 'HOME', to_link: '/'}, 
        {name: 'ABOUT', to_link: '/about'}, 
        {name: 'CONTACT', to_link: '/contact'}, 
        {name: 'GALLERY', to_link: '/gallery'}
    ];


    return (
        <nav className={props.collapse && classes.collapse} style={{right: nav_context.right_position}}>
            <CentreDiv>
                <ul className={props.collapse && classes.collapse} onClick={() => {nav_context.close_nav();}}>
                    {links_data.filter((item) => {return links_data.indexOf(item) < links_data.length - 1;})
                        .map((data) => { return(
                            <li className={props.collapse && classes.collapse}>
                                <NavLink activeClassName={classes.active} exact to={data.to_link}>{data.name}</NavLink>
                                {sep}
                            </li>
                        );})
                    }
                    <li className={props.collapse && classes.collapse}>
                        <NavLink activeClassName={classes.active} exact 
                            to={links_data[links_data.length - 1].to_link}>{links_data[links_data.length - 1].name}</NavLink>
                    </li>
                </ul>
            </CentreDiv>
        </nav>
    );
}

export default PageNav;