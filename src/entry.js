import React from 'react';
import { render } from 'react-dom';
import { Button } from 'amazeui-react';

import image from './static/images/20161023223233.png';
// import Button from './component/Button/Button';

class App extends React.Component {
  componentDidMount() {
    // fetch('http://10.73.36.59:5000/v1/test')
    //   .then((response) => {
    //   return response.json();
    // }).then((rtn) => {
    //   console.dir(rtn);
    // });
  }
  render() {
    return (
      <div>
        <Button amStyle="primary">Hello World</Button>
        <img alt="" src={image} />
        hello react
      </div>
     );
  }
}

render(<App />, document.getElementById('app'));
