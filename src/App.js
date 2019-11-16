import React, {useState,useContext}from 'react';
import {themes,ThemeContext} from "./Theme";
//import themeButton from "./changeButton";
import './App.css';
function ThemeButton(props){
  let context = useContext(ThemeContext);
  return(
      <button {...props} style = {context}>button</button>
  );
}
ThemeButton.contextType = ThemeContext
export default function App() {
  const [theme,setTheme] = useState(themes.dark);
  //
  const changeTheme = ()=> setTheme(theme === themes.light? themes.dark:themes.light);
  return (
    <div>
    <ThemeContext.Provider value={theme}>
      <ThemeButton onClick={changeTheme}/>
    </ThemeContext.Provider>
    <ThemeContext.Provider value={theme === themes.light? themes.dark:themes.light}>
      <ThemeButton onClick={changeTheme}/>
    </ThemeContext.Provider>
    
    </div>
  )
}