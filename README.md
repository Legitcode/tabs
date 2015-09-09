##Tabs

A basic tabs component, with a few customizable props.

##Install

`npm install legit-tabs`

##Example

~~~js
import {Tabs, Tab} from 'legit-tabs';

<Tabs className="accordion-tabs-minimal" active="second">
  <Tab name="first">
    hey
  </Tab>
  <Tab name="second" style={{background: 'yellow'}}>
    whats up
  </Tab>
  <Tab name="third" className="test">
    hello
  </Tab>
</Tabs>
~~~

##Props

**Tabs**:

- `active`: Name of the tab you want to be active, defaults to the first one if empty
- anything else you'd like to set on the containing ul

**Tab**:

- `name`: a unique name for the tab, represents the tab title.
- `liClass`, `liStyle`: class on the li for the tab
- anything else you'd like to set on the tab's containing div.
