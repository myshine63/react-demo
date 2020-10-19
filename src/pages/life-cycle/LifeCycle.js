import React from 'react';

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn() {
    this.setState(state => {
      return {count: state.count + 1};
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickBtn}>
          add +
        </button>
        <h1>lifeCycle:{this.state.count}</h1>
        <Son count={this.state.count}/>
      </div>
    )
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      sonCount: this.props.count
    }
    console.log('constructor')
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn() {
    this.setState(state => {
      return {sonCount: state.sonCount + 1};
    })
  }

  // state的count永远受父组件的count控制
  static getDerivedStateFromProps(props, state) {
    return {count: props.count}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 这样son中count不仅受父组件控制，也受son组件控制
    if (prevProps.count !== this.props.count) {
      this.setState({
        sonCount: this.props.count
      })
    }
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <div onClick={this.clickBtn}>
        <h1>son:{this.state.count}</h1>
        <h1>sonCount:{this.state.sonCount}</h1>
      </div>
    )
  }
}

export default LifeCycle