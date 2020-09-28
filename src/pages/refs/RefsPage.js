import React from "react";
import ForwardRef from "./ForwradRef";

class RefsPage extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  render() {
    return (
      <div>
        refs 转发
        <ForwardRef ref={this.ref}>
          click
        </ForwardRef>
      </div>
    )
  }
}

export default RefsPage