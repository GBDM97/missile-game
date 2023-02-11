import React from 'react'; 
import '../App.css';

const missiles = () => {
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
                <img src={require("../media/missle1.png")} alt="missle1" className='missle1'/>
        </div>
    
    </>
    )
}; 

export default missiles