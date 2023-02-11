import React from 'react'; 
import { GameContext } from '../context/gameContext';

const Menu = () => {
    const click = () => {}
    const { dark, toggleDark } = React.useContext(GameContext);

    return(
    <>
        <div className='send' onClick={toggleDark}>{dark ? "true":"false"}</div>
    </>
    )}; 
export default Menu