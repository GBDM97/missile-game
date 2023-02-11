import React from 'react';
import MainPage from './Pages/main';
import { GameProvider } from './context/gameProvider';

const App = () => {

    return(
    <>
        <GameProvider>
            <MainPage/>
        </GameProvider>
    </>
    )}; 
export default App