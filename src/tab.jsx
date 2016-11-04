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
    const {
      liClass,
      liStyle,
      contentClass,
      active,
      name,
      children,
      ...rest
    } = this.props;
    delete rest.clicked;
    const linkClass = active ? 'is-active' : null;

    return (
      <li className={`tab-header-and-content ${liClass}`} style={liStyle || null}>
        <a
          className={`tab-link ${linkClass}`}
          onClick={this.clicked}>
          {name}
        </a>

        {active ?
          <div {...rest} className={`tab-content ${contentClass}`}>
            { children }
          </div>
        : null}
      </li>
    )
  }
}
