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
        <h1>如何转发refs的案例</h1>
        <ForwardRef ref={this.ref}>
          click
        </ForwardRef>
      </div>
    )
  }
}

export default RefsPage