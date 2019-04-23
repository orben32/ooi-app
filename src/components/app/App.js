import React from 'react';

export default class AppRoot extends React.Component {
  render() {
    return (
      <h1
        style={{
          color: this.props.style.styleParams.colors.backgroundColor.value,
          fontSize: this.props.style.styleParams.fonts.fontSize.size,
        }}
      >
        Hello {this.props.name}
      </h1>
    );
  }
}
