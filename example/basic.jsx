import React from 'react';
import {Tabs, Tab} from '../src/index';

require('../src/css/default');

export default class Basic extends React.Component {

  render() {
    return (
      <Tabs className="my-custom-tab-class" active="second">
        <Tab name="first" liClass="custom-list-class">
          hey
        </Tab>
        <Tab name="second" style={{background: 'yellow'}}>
          whats up
        </Tab>
        <Tab name="third">
          hello
        </Tab>
      </Tabs>
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
