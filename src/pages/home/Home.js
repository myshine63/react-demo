import React from "react";
import {useHistory} from 'react-router-dom'

function Home() {
  const history = useHistory();
  return (
  <h1 onClick={() => {
    history.push('/refs')
  }}>welcome to hepan</h1>
  )
}


export default React.memo(Home)