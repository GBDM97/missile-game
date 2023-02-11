import React from "react";

export interface IGameContext {
    dark: boolean;
    toggleDark?: () => void;
  }
  
export const defaultState = {
    dark: false,
  };
  
export const GameContext = React.createContext<IGameContext | null>(defaultState);
    

