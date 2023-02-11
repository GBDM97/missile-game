import React from 'react';
import MainPage from './Pages/main';
import { GameProvider } from './Context/gameProvider';

const App = () => {

    return(
    <>
        <GameProvider>
            <MainPage/>
        </GameProvider>
    </>
    )}; 
export default App