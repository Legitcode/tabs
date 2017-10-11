import React from 'react';

export default class Tabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      active: props.active || props.children[0].props.name
    };
  }

  renderChildren(){
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        clicked: this.clicked,
        active: this.state.active === child.props.name ? true : false
      });
    });
  }

  clicked = (active) => {
    this.setState({active});
  }

  render() {
    const { className, ...rest } = this.props;

    // This is a hack to make React 15 happy. We can't pass the `active` prop
    // through to the `ul` component. This component needs a bit of a rewrite
    // so we'll go ahead and just do this for now.
    delete rest.active;

    return (
      <ul className={`accordion-tabs-minimal ${className}`} {...rest}>
        { this.renderChildren() }
      </ul>
    );
  }
}
