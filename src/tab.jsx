import React from 'react';

export default class Tab extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    clicked: React.PropTypes.func,
    active: React.PropTypes.bool,
    children: React.PropTypes.any.isRequired
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
      <li>
        <a
          className={linkClass}
          onClick={this.clicked}>
          {this.props.name}
        </a>

        {this.props.active ?
          <div {...this.props}>
            { this.props.children }
          </div>
        : null}
      </li>
    )
  }
}
