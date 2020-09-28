import React, {useState, useEffect} from "react";

function Home() {
  const [count, setCount] = useState(0);
  console.log(1111, count)
  useEffect(() => {
    console.log(count);
    return () => {
      console.log(count)
    }
  })
  return (
    <button onClick={() => {
      setCount(count + 1)
    }}>
      {count}次
    </button>
  )
}


export default React.memo(Home)