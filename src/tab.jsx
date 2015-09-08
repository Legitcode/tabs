import React from 'react';

export default class Tab extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    tabClicked: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  clicked = () => {
    this.props.clicked(this.props.name);
  }

  render() {
    let linkClass = this.props.active ? 'active' : null;

    return (
      <li {...this.props}>
        <a
          className={linkClass}
          onClick={this.clicked}>
          {this.props.name}
        </a>

        {this.props.active ?
          <div style={this.props.containerStyle} className="tab-content">
            { this.props.children }
          </div>
        : null}
      </li>
    )
  }
}
