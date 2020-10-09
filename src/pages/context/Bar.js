import React from "react";
import {Button, ClassButton} from "./Button";

function Bar({theme}) {
  return (
    <>
      <Button theme={theme}/>
      <ClassButton theme={theme}/>
    </>
  )
}

export default Bar