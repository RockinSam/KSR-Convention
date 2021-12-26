import classes from './Testimonials.module.css';

import { useState } from 'react';

import Button from '../components/Button';
import CentreDiv from '../components/CentreDiv';

import arrow_left_img from '../res/arrow-left.svg';
import arrow_right_img from '../res/arrow-right.svg';
import rating_star_img from '../res/rating-star.svg';


var i = 0;

function Testimonials() {

    const reviews = [
        {
            name: 'Mani Raj Chandupatla',
            review_text: 'Incredible, Open place for any kind of occasion. Very spacious and great hospitality.'
        },
        {
            name: 'yelimela vishnu prasad',
            review_text: 'It was spacious and good for 1000+ also..'
        },
        {
            name: 'yogendra reddy',
            review_text: 'Amazing place to enrich your moment’s 😊'
        },
        {
            name: 'Janaki Reddy',
            review_text: 'Its very spacious and beautiful.'
        }
    ];

    const [review, set_review] = useState(reviews[i]);

    function next() {
        i = ++i % reviews.length;
        set_review(reviews[i]);
    }

    function prev() {
        i = i === 0 ? reviews.length - 1 : i - 1;
        set_review(reviews[i]);
    }

    function add_review() {
        window.open('https://g.page/r/CRrq9zVDkunJEAo/review', '_blank');
    }

    
    return (
        <div className={classes.testimonials}>
            <h2 className={classes.heading}>Testimonials</h2>
            <div className={classes.underline}></div>
            <h3 className={classes.sub_heading}>Our happy customer's reviews</h3>
            <div className={classes.customer_review}>
                <div className={classes.reviews_outer_div}>
                    <div className={classes.arrow_button_div}>
                        <CentreDiv>
                            <button className={classes.arrow_button} onClick={prev}>
                                <img src={arrow_left_img} width="50px" alt='' />
                            </button>
                        </CentreDiv>
                    </div>
                    <div className={classes.review_div}>
                        <h2>{review.name}</h2>
                        <div>
                            <img src={rating_star_img} alt='' />
                            <img src={rating_star_img} alt='' />
                            <img src={rating_star_img} alt='' />
                            <img src={rating_star_img} alt='' />
                            <img src={rating_star_img} alt='' />
                        </div>
                        <p>{review.review_text}</p>
                    </div>
                    <div className={classes.arrow_button_div}>
                        <CentreDiv>
                            <button className={classes.arrow_button} onClick={next}>
                                <img src={arrow_right_img} width="50px" alt='' />
                            </button>
                        </CentreDiv>
                    </div>
                </div>
            </div>
            <div className={classes.buttons_div}>
                <Button text='ADD YOUR REVIEW' color='#fff' bg='rgb(120,81,169,0.8)'
                    onclick={add_review} />
            </div>
        </div>
    );
}

export default Testimonials;