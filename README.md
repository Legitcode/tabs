##Tabs

A basic tabs component, with a few customizable props.

##Example

~~~js
import {Tabs, Tab} from 'legit-tabs';

<Tabs className="accordion-tabs-minimal" active="second">
  <Tab name="first">
    hey
  </Tab>
  <Tab name="second" containerStyle={{background: 'yellow'}}>
    whats up
  </Tab>
  <Tab name="third">
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
- `containerStyle`: style for the containing div that holds the content
