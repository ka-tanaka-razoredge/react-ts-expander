import React, { Component } from 'react';

interface ExpanderProps {
  renderEx: any,
  doIt: any,
};

interface ExpanderState {
  borderColor: string,
  isSelected: boolean,
  height: number,
}

export class Expander extends Component<ExpanderProps, ExpanderState> {

  constructor(props) {
    super(props);
    this.state = {
      borderColor: 'blue',
      isSelected: false,
      height: 20,
    };
  }

  toggleSelected(e) {
    if (this.state.isSelected) {
      this.setState({borderColor: 'blue'});
      this.setState({isSelected: false});
    } else {
      this.setState({borderColor: 'red'});
      this.setState({isSelected: true});
    }
  }

  modify(e) {
    if (this.state.isSelected) {
      this.setState({height: this.state.height + 1});
      this.props.doIt(this.state.height);
    }
  }

  acceptExpandee() {
    return (
      this.props.renderEx
    );
  }

  render() {
    return (
      <div
        style={{
          border: 'solid 2px ' + this.state.borderColor,
          zIndex: 101,
          position: 'absolute',
          height: this.state.height + 'px',
        }}
        onClick={e => this.toggleSelected(e)}
        onMouseMove={e => this.modify(e)}
      >
        {this.props.renderEx}
      </div>
    );
  }

}