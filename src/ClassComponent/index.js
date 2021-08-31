import React from 'react';
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ switch: true });
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck() {
    this.setState((state) => ({ switch: !state.switch }));
  }
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={this.onCheck}>
          Switch {this.state.switch ? 'on' : 'off'}
        </button>
      </div>
    );
  }
}
