import React from "react";
import { GameContext, defaultState} from './gameContext'

interface Props {
  children: React.ReactNode;
}

export const GameProvider: React.FC<Props> = ({ children }) => {
    const [dark, setDark] = React.useState(defaultState.dark);
  
    const toggleDark = () => {
      setDark(!dark);
    };
  
    return (
      <GameContext.Provider
        value={{
          dark,
          toggleDark,
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };