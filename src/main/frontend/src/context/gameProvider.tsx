import React from "react";
import { GameContext, defaultState} from './gameContext'

interface Props {
  children: React.ReactNode;
}

export const GameProvider: React.FC<Props> = ({ children }) => {
    const [dark, setDark] = React.useState(defaultState.dark);
    const [test, setTest] = React.useState(defaultState.test);

  
    const toggleDark = () => {
      setDark(!dark);
    };

    const toggleTest = (n: number) => {
      setTest(test + n)
    }
  
    return (
      <GameContext.Provider
        value={{
          dark,
          toggleDark,
          test,
          toggleTest
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };