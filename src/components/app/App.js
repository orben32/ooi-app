import React from 'react';

export default class AppRoot extends React.Component {
  render() {
    return (
      <div>
        <button
          className="mainButton"
          onClick={() => {
            console.log(this.props);
            this.props.log();
          }}
        >
          Helllllo
        </button>
        <input type="checkbox" />
        <h1
          style={{
            color: this.props.style.styleParams.colors.backgroundColor
              ? this.props.style.styleParams.colors.backgroundColor.value
              : '',
            //fontSize: this.props.style.styleParams.fonts.fontSize.size,
          }}
        >
          Hello {this.props.name}
        </h1>
      </div>
    );
  }
}
