import React from 'react';
import { render } from 'react-dom';
import image from './static/images/20161023223233.png';
import Button from './component/Button/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button text="Click" />
        <img alt="" src={image} />
        hello react
      </div>
     );
  }
}

render(<App />, document.getElementById('app'));
