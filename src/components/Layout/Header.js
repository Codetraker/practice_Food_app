import {Fragment} from 'react';
import mealPic from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>HotMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}> {/* Because of '-' we can't use '.',so this is the way */}
                <img src={mealPic} alt='A table full of food!'/>
            </div>
        </Fragment>
    );
};

export default Header;