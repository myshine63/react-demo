import React from "react";
import Bar from "./Bar";

export const ThemeContext = React.createContext('black')

function ContextPage() {
  return (
    // 设置context的值为字符串green
    <ThemeContext.Provider value='green'>
      <Bar theme='dark'/>
    </ThemeContext.Provider>
  )
}

export default ContextPage