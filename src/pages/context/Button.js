import React, {useContext} from "react";
import {ThemeContext} from './ContextPage'

function Button({theme}) {
  const context = useContext(ThemeContext);
  return (
    <>
      <h1>通过每层传递下来的值:{theme}</h1>
      <h1>context的值为:{context}</h1>
    </>
  )
}

export default Button