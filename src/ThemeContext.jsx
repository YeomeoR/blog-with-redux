import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // define a state for the theme
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* If we render out the props.children and wrap the whole App in index.js
        with this function and anything inside there will be rendered, here  */}
      {props.children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeContextProvider};
