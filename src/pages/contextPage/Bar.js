import React from "react";
import {FunctionTheme, ClassTheme} from "./Theme";

function Bar({theme}) {
  return (
    <>
      <FunctionTheme theme={theme}/>
      <ClassTheme theme={theme}/>
    </>
  )
}

export default Bar