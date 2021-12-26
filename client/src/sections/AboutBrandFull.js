import classes from './AboutBrandFull.module.css';

import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

import suitables_pic_1 from '../res/suitables-pic-1.jpg';
import suitables_pic_2 from '../res/suitables-pic-2.jpg';
import suitables_pic_3 from '../res/about-pic-5.jpg';
import features_pic_1 from '../res/features-pic-1.svg';
import features_pic_2 from '../res/features-pic-2.svg';
import features_pic_3 from '../res/features-pic-3.svg';
import features_pic_4 from '../res/features-pic-4.svg';


function AboutBrandFull() {

    let history = useHistory();

    const suitables = [
        {img: suitables_pic_1, capt: 'Marriages'},
        {img: suitables_pic_2, capt: 'Engagements'},
        {img: suitables_pic_3, capt: 'Parties'}
    ]

    const features = [
        {img: features_pic_1, capt: 'We provide a wide and spacious 5 acres of area which can accommodate over 2500 guests at a time.'},
        {img: features_pic_2, capt: 'Our venue consists of a large AC Hall that can accomodate upto 1500 guests and an open air space with lush green lawns for outdoor activities.'},
        {img: features_pic_3, capt: 'Our venue is very close to the Nehru Outer Ring Road and it is very well connected to the city by road.'},
        {img: features_pic_4, capt: 'We provide a large and safe vehicle parking area for you and your guests.'}
    ];

    
    return (
        <div id='about_brand' className={classes.about_brand_full}>
            <div className={classes.about_div}>
                <h1>KSR Convention</h1>
                <div className={classes.underline}></div>
                <p>
                    KSR Convetion located in a serene location of Hyderabad provides an 
                    elegant setting for weddings, engagement ceremonies, birthday parties 
                    and all kinds of social events.
                </p>
                <p>
                    KSR Convention is committed to excellence. We will handle your special 
                    events and occasions with high standards of quality and service.
                </p>
            </div>
            <div className={classes.suitables_div}>
                <h2>KSR Convention center is best suitable for ..</h2>
                <div>
                    {suitables.map(data => {return (
                        <figure>
                            <img src={data.img} alt='' />
                            <figcaption>{data.capt}</figcaption>
                        </figure>
                    );})}
                </div>
            </div>
            <div className={classes.features_div}>
                {features.map(data => {return (
                    <figure>
                        <img src={data.img} alt='' />
                        <figcaption>{data.capt}</figcaption>
                    </figure>
                );})}
            </div>
            <div className={classes.contact_div}>
                <h2>Contact us and book your next event.</h2>
                <Button text='CONTACT US' color='#fff' bg='rgb(120,81,169,0.8)'
                    onclick={() => {history.push('/contact');}} />
            </div>
        </div>
    );
}

export default AboutBrandFull;