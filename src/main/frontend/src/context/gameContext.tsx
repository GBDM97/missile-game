import React from "react";

export interface IGameContext {
    dark: boolean;
    toggleDark?: () => void;
    test: number;
    toggleTest: (n: number) => void;
  }
  
export const defaultState = {
    dark: false,
    test: 0,
    toggleTest: (n:number) => {}
  };
  
export const GameContext = React.createContext<IGameContext>(defaultState);
    

