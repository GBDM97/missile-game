import React from 'react'; 
import '../App.css';
import { GameContext } from '../context/gameContext';

const Missiles = () => {
    const { dark, toggleDark } = React.useContext(GameContext);

    return(
    <>
        <div style={ {
                        position: 'relative',
                        height: '200vw',
                        width: '17px',
                        backgroundColor: 'purple',
                        transformOrigin: 'top left',
                        display: 'flex',
                        justifyContent: 'center',
                        rotate: '-45deg'
              }}>
                <img src={require("../media/missle1.png")} alt="missle1" className='missle1' onClick={toggleDark}/>
                {dark ? "true":"false"}
        </div>
    
    </>
    )
}; 

export default Missiles