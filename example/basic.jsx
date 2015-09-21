import React from 'react';
import {Tabs, Tab} from '../src/index';

require('../src/css/default');

export default class Basic extends React.Component {

  render() {
    return (
      <Tabs className="accordion-tabs-minimal" active="second">
        <Tab name="first">
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
