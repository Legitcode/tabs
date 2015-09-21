import React from 'react';

export default class Tabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.array
  }

  constructor(props) {
    super()
    this.state = {
      active: props.active || props.children[0].props.name
    }
  }

  renderChildren(){
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        clicked: this.clicked,
        active: this.state.active === child.props.name ? true : false
      })
    })
  }

  clicked = (active) => {
    this.setState({active})
  }

  render() {
    let { className, ...props } = this.props;

    return (
      <ul className={`accordion-tabs-minimal ${this.props.className}`} {...props}>
        { this.renderChildren() }
      </ul>
    )
  }
}
