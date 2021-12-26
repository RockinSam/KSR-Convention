import classes from './Button.module.css';


function Button(props) {

    let img_tag = null;

    if (props.img) {
        img_tag = <img src={props.img} alt='' />;
    }
    

    return (
        <button className={classes.btn} onClick={props.onclick} style={{background: props.bg, color: props.color}}>
            {img_tag}
            {props.text}
        </button>
    );
}

export default Button;