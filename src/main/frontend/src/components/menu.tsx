import React from 'react'; 
import { GameContext } from '../Context/gameContext';

const Menu = () => {
    const click = () => {}
    const { dark, toggleDark } = React.useContext(GameContext);
    const { test, toggleTest } = React.useContext(GameContext);


    return(
    <>
        <div className='send' onClick={toggleDark}>{test}</div>
    </>
    )}; 
export default Menu