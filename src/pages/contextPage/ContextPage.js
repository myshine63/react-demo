import React from "react";
import Bar from "./Bar";

export const ThemeContext = React.createContext('black')

function ContextPage() {
  return (
    // 设置context的值为字符串green
  <ThemeContext.Provider value='green'>
    <h1>这是一个使用context的案例</h1>
    <Bar theme='dark'/>
  </ThemeContext.Provider>
  )
}

export default ContextPage;