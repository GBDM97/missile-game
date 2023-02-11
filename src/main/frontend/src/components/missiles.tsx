import React from 'react'; 
import '../App.css';
import { GameContext } from '../Context/gameContext';

const Missiles = () => {
    const { dark, toggleDark } = React.useContext(GameContext);
    const { test, toggleTest } = React.useContext(GameContext);

    return(
    <>
        <div onClick={()=>toggleTest(4)} style={ {
                        position: 'relative',
                        height: '200vw',
                        width: '17px',
                        backgroundColor: 'purple',
                        transformOrigin: 'top left',
                        display: 'flex',
                        justifyContent: 'center',
                        rotate: '-45deg'
              }}>
                <img src={require("../Media/missle1.png")} alt="missle1" className='missle1'/>
                {dark ? "true":"false"}
        </div>
    
    </>
    )
}; 

export default Missiles