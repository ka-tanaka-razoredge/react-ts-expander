import React, { Component, Ref } from 'react';
import { Expander } from './Expander';

export default class Hello extends Component {
  
  handle;
  constructor(props) {
    super(props);
    this.handle = React.createRef();
  }

  componentDidMount() {
  }

  doIt = (height) => {
    this.handle.current.style.height = height + 'px';
  }

  renderEx() {
    return (
        <div
          ref={this.handle}
          style={{backgroundColor: 'black', color: 'white', zIndex: 200, position: 'relative', height: '20px'}}
        >
          Hello
        </div>
    );
  };

  render() {
    return (
      <Expander renderEx={this.renderEx()} doIt={this.doIt}>
      </Expander>
    );
  }
}
