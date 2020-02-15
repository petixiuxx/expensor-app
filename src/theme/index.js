import {createContext} from 'react';
export const ThemeContext = createContext({});

export const ThemeProdiver = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
