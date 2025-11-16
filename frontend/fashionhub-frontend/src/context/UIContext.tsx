import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Example state for theme management

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <UIContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUIContext = () => {
    return useContext(UIContext);
};