import classes from './Gallery.module.css';

import BottomNav from '../components/BottomNav';
import MainNav from '../components/MainNav';
import GalleryDisplay from '../sections/GalleryDisplay';


function Gallery() {

    window.scrollTo({top: 0, behavior: 'instant'});

    
    return (
        <div className={classes.gallery}>
            <MainNav brand dark />
            <GalleryDisplay />
            <BottomNav />
        </div>
    );
}

export default Gallery;