import classes from './AboutBrand.module.css';

import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import PicsCollage from '../components/PicsCollage';

import features_pic_1 from '../res/features-pic-1.svg';
import features_pic_2 from '../res/features-pic-2.svg';
import features_pic_3 from '../res/features-pic-3.svg';
import features_pic_4 from '../res/features-pic-4.svg';


function AboutBrand() {

    let history = useHistory();

    const features = [
        {img: features_pic_1, capt: 'Accommodates over 2500 guests'},
        {img: features_pic_2, capt: 'AC Hall and Open garden space'},
        {img: features_pic_3, capt: 'Very close to Outer Ring Road'},
        {img: features_pic_4, capt: 'Ample parking area'}
    ];

    
    return (
        <div id='about_brand' className={classes.about_brand}>
            <div className={classes.about_div_top}>
                <div className={classes.about_div}>
                    <h2>KSR Convention</h2>
                    <div className={classes.underline}></div>
                    <p>
                        KSR Convetion located in a serene location of Hyderabad provides an 
                        elegant setting for weddings, engagement ceremonies, birthday parties 
                        and all kinds of social events.
                    </p>
                </div>
                <div className={classes.features_div}>
                    {features.map(data => {return (
                        <figure>
                            <img src={data.img} alt='' />
                            <figcaption>{data.capt}</figcaption>
                        </figure>
                    );})}
                </div>
                <div className={classes.buttons_div}>
                    <Button text='ABOUT US' color='#fff' bg='rgb(120,81,169,0.8)'
                        onclick={() => {history.push('/about');} } />
                    <Button text='CONTACT US' color='#fff' bg='rgb(120,81,169,0.8)'
                        onclick={() => {history.push('/contact');}} />
                </div>
            </div>
            <div className={classes.about_div_bottom}>
                <PicsCollage />
            </div>
        </div>
    );
}

export default AboutBrand;