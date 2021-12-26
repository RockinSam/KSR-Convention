import classes from './MainDisplay.module.css';

import { React } from "react";
import { Link } from "react-scroll";

import MainNav from '../components/MainNav';
import CentreDiv from '../components/CentreDiv';
import Button from '../components/Button';

import design_img from '../res/design.png';
import arrow_down_img from '../res/arrow-down.svg';
import call_img from '../res/call.svg';
import whatsapp_img from '../res/whatsapp.svg';


function MainDisplay() {

    function call_phone() {
        document.location.href = 'tel:+91 73311 06333';
    }

    function open_whatsapp() {
        window.open('https://wa.me/917331106333', '_blank');
    }


    return (
        <div className={classes.display_part}>
            <MainNav />
            <div className={classes.display_container}>
                <CentreDiv>
                    <h1 className={classes.main_heading}>KSR CONVENTION</h1>
                    <h1 className={classes.sub_heading}>
                        H&nbsp;&nbsp;Y&nbsp;&nbsp;D&nbsp;&nbsp;
                        E&nbsp;&nbsp;R&nbsp;&nbsp;A&nbsp;&nbsp;
                        B&nbsp;&nbsp;A&nbsp;&nbsp;D
                    </h1>
                    <img className={classes.design} src={design_img} alt='' />
                </CentreDiv>
            </div>
            <div className={classes.align}>
            <div className={classes.button_container}>
                <Link className={classes.arrow_down} to='about_brand'>
                    <CentreDiv><img src={arrow_down_img} alt='' /></CentreDiv>
                </Link>
                <div className={classes.contact_container} >
                    <Button img={call_img} color='#fff' bg='rgb(120,81,169,0.8)'
                        text='+91&nbsp;73311&nbsp;06333' onclick={call_phone} />
                    <Button img={whatsapp_img} color='#fff' bg='rgb(37,211,102,0.8)' 
                        text='+91&nbsp;73311&nbsp;06333' onclick={open_whatsapp} />
                </div>
            </div></div>
        </div>
    );
}

export default MainDisplay;