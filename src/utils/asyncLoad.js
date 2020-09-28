import Loadable from 'react-loadable';
import React from "react";

function Loading() {
  return (
    <div>
      loading
    </div>
  )
}

function asyncLoad(importCall) {
  return Loadable({
    loader: importCall,
    loading: Loading
  })
}

export default asyncLoad