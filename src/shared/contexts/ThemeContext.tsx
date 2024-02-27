import { createContext, useCallback, useContext, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import React, { useMemo, ReactNode } from 'react';


import { LigthTheme, DarkTheme } from "./../themes";


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LigthTheme;

        return DarkTheme;
    },[themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vw" bgcolor={theme.palette.background.default}>
                {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}