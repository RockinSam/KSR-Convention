import classes from './GalleryDisplay.module.css';

import { useState } from 'react';

import CentreDiv from '../components/CentreDiv';
import media from '../store/media-file-paths.json';

import arrow_left_img from '../res/arrow-left.svg';
import arrow_right_img from '../res/arrow-right.svg';
import close_img from '../res/close.svg';


function GalleryDisplay() {

    window.scrollTo({top: 0, behavior: 'instant'});

    const [display_data, set_display_data] = useState({tag: null, display: 'none', index: -1});

    function display_viewer(ind) {

        let temp = null;

        if (media[ind].type === 'I') {
            temp = <img src={media[ind].main} alt='' />;
        } 
        else {
            temp =  <video controls autoPlay>
                        <source src={media[ind].main} type="video/mp4" />
                        This browser doesn't support video.
                    </video>;
        }
        console.log(media);
        set_display_data({tag: temp, display: 'block', index: ind});
    }

    function close_viewer() {
        set_display_data({tag: null, display: 'none', index: -1});
    }

    function change_img(dirn) {
        let i = display_data.index + dirn;
        i = i === -1 ? media.length - 1 : i;
        i = i === media.length ? 0 : i;
        display_viewer(i);
    }

    
    return (
        <div className={classes.gallery_display}>
            <h1>Gallery{display_data.media_src}</h1>
            <div className={classes.underline}></div>
            <div className={classes.media_div}>
                {media.map((data) => {return(
                    <img onClick={() => {display_viewer(media.indexOf(data));}} src={data.thumbnail} alt='' />
                    );})}
            </div>
            <div className={classes.main_viewer} style={{display: display_data.display}}>
                <img className={classes.close_btn} src={close_img} alt='' onClick={close_viewer} />
                <div className={classes.inner_viewer_div}>
                    <div className={classes.arrows_div_left}>
                        <CentreDiv>
                            <img src={arrow_left_img} alt='' onClick={()=>{change_img(-1);}}/>
                        </CentreDiv>
                    </div>
                    <div className={classes.main_img_div}>
                        <CentreDiv>
                            {display_data.tag}
                        </CentreDiv>
                    </div>
                    <div className={classes.arrows_div_right}>
                        <CentreDiv>
                            <img src={arrow_right_img} alt='' onClick={()=>{change_img(1);}}/>
                        </CentreDiv>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryDisplay;