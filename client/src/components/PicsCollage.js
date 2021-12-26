import classes from './PicsCollage.module.css';

import { useHistory } from 'react-router-dom';

import Button from "./Button";
import CentreDiv from './CentreDiv';

import gallery_pic_1 from '../res/about-pic-1.jpg';
import gallery_pic_2 from '../res/about-pic-2.jpg';
import gallery_pic_3 from '../res/about-pic-3.jpg';
import gallery_pic_4 from '../res/about-pic-4.jpg';
import gallery_pic_5 from '../res/about-pic-5.jpg';
import gallery_pic_6 from '../res/about-pic-6.jpg';


function PicsCollage() {

    let history = useHistory();


    return (
        <div className={classes.pics_div}>
            <div className={classes.inner_pics_div1}>
                <div className={classes.empty_div}></div>
                <img className={classes.gallery_pic} src={gallery_pic_1} alt='' />
                <img className={classes.gallery_pic} src={gallery_pic_2} alt='' />
            </div>
            <div className={classes.inner_pics_div2}>
                <img className={classes.gallery_pic} src={gallery_pic_3} alt='' />
                <div className={classes.btn_div}>
                    <CentreDiv>
                        <h1>Gallery</h1>
                        <div className={classes.underline}></div>
                        <Button text='VIEW MORE' color='#fff' bg='rgb(120,81,169,0.8)'
                            onclick={() => {history.push('/gallery');}} />
                    </CentreDiv>
                </div>
                <img className={classes.gallery_pic} src={gallery_pic_4} alt='' />
            </div>
            <div className={classes.inner_pics_div3}>
                <div className={classes.empty_div}></div>
                <img className={classes.gallery_pic} src={gallery_pic_5} alt='' />
                <img className={classes.gallery_pic} src={gallery_pic_6} alt='' />
            </div>
        </div>
    );
}

export default PicsCollage;