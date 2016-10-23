/**
 * Created by Administrator on 2016/10/23 0023.
 */
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <img src={require('./static/images/20161023223233.png')}/>
            hello react
            </div>
    }
}

render(<App/>,document.getElementById("app"));