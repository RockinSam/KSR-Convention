import classes from './CentreDiv.module.css';


function CentreDiv(props) {
    
    return (
        <div className={classes.outer_div}>
            <div className={classes.inner_div}>
                {props.children}
            </div>
        </div>
    );
}

export default CentreDiv;