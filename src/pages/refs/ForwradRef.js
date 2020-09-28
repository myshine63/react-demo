import React from "react";

// ref和key类似，不能够通过prop传递给子组件。因此需要通过forwardRef进行转发。
const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={() => {
      alert('click')
    }}>
      {props.children}
    </button>
  )
})
export default ForwardRef
