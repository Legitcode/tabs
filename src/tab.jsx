import React from 'react';

export default class Tab extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    clicked: React.PropTypes.func,
    active: React.PropTypes.bool,
    children: React.PropTypes.any.isRequired,
    liStyle: React.PropTypes.object,
    liClass: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  clicked = () => {
    this.props.clicked(this.props.name);
  }

  render() {
    let linkClass = this.props.active ? 'is-active' : null;
    return (
      <li className="tab-header-and-content" style={this.props.liStyle || null}>
        <a
          className={`tab-link ${linkClass}`}
          onClick={this.clicked}>
          {this.props.name}
        </a>

        {this.props.active ?
          <div {...this.props} className="tab-content">
            { this.props.children }
          </div>
        : null}
      </li>
    )
  }
}
