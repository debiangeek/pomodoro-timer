import React, { Component } from 'react';

import '../stylesheets/App.css';
import Settings from './Settings';
import Display from './Display';

class Timer extends Component {
    render() {
        return (
            <div id="timer" >
                <Settings />
                <Display /> 
            </div>
        );
    };
};

export default Timer;