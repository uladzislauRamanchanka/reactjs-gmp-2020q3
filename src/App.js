import React from 'react';

const createElement = React.createElement(
    'h1',
    null,
    'Hello World! (Created within React.createElement)'
);

const FunctionalComponent = () => <h1>Hello World! (Created within functional component)</h1>;

class Component extends React.Component {
  render() {
      return <h1>Hello World! (Created within React.Component)</h1>
  }
}

class PureComponent extends React.PureComponent {
  render() {
      return <h1>Hello World! (Created within React.PureComponent)</h1>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {createElement}
      <FunctionalComponent/>
      <Component/>
      <PureComponent/>
    </div>
  );
}

export default App;
