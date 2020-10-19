import React, {useState} from 'react';
import './RenderPropPage.scss'

function UseColor({color}) {
  return (<div className='use-color' style={{backgroundColor: color}}/>)
}

// 当useColor组件想要使用changeColor的内部状态时，直接使用render prop就可以了
function RenderPropPage() {
  return (
  <div className='render-prop-page'>
    <ChangeColor render={(color) => {
      return <UseColor color={color}/>
    }}/>
  </div>
  )
}

function ChangeColor({render}) {
  const [color, setColor] = useState('green');
  // 内部定义一个color状态
  const clickBtn = (value) => {
    setColor(value);
  }
  return (
  <>
    <h1>使用renderProp的案例</h1>
    <button onClick={() => {
      clickBtn('green')
    }}>
      green
    </button>
    <button onClick={() => {
      clickBtn('red')
    }}>
      red
    </button>
    {/*这里可以接受各种想要使用ChangeColor 内部状态的组件*/}
    {render(color)}
  </>
  )
}

export default RenderPropPage