import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';
import { updateSession, updateBreak, togglePause, updateStatus, updateTimeLeft } from './../actions/actionCreators';

class Display extends Component {
    constructor(props) {
        super(props);

        this.handlePause = this.handlePause.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleTimer = this.handleTimer.bind(this);
    }

    handleTimeUp() {
        document.getElementById('beep').play();
        if (this.props.status === 'Break') {
            this.props.updateStatus('Session');
            this.props.updateTimeLeft(this.props.session * 60);
        } else {
            this.props.updateStatus('Break');
            this.props.updateTimeLeft(this.props.breakVal * 60);
        }
    }

    handleTimer() {
        if (this.props.paused) {
            clearInterval(this.state.timer);
        } else {
            this.setState({ timer: setInterval(() => {
                if (this.props.timeLeft === 0) {
                    this.handleTimeUp();
                } else {
                    this.props.updateTimeLeft(this.props.timeLeft - 1);
                }
            }, 1000)})
        }
    };

    handlePause() {
        let button = document.getElementById('start_stop');
        let icon = this.props.paused ? 'fas fa-play' : 'fas fa-pause';
        button.className = icon;
        
        this.handleTimer();
        this.props.togglePause();
    }

    handleReset() {
        this.props.updateSession(25);
        this.props.updateBreak(5);
        this.props.updateStatus('Session');
        this.props.updateTimeLeft(1500);
        let beep = document.getElementById('beep');
        beep.pause();
        beep.currentTime = 0;
        if (this.props.paused) {
            this.handlePause();
        }
    }

    render() {
        return (
            <div id='display' >
            <p id='timer-label'>{this.props.status}</p>
            <p id='time-left'>{(parseInt(this.props.timeLeft / 60) < 10) ? '0' : null}{parseInt(this.props.timeLeft / 60)}{(this.props.timeLeft % 60) < 10 ? ':0' : ':'}{this.props.timeLeft % 60}</p>
            <i id='start_stop' className='fas fa-play' onClick={this.handlePause} ></i>
            <i id='reset' className='fas fa-sync-alt' onClick={this.handleReset}></i>
            <audio id="beep" src={require("../Sfx-RimshotMp3.mp3")} />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        session: state.session,
        breakVal: state.breakVal,
        paused: state.paused,
        timeLeft: state.timeLeft,
        status: state.status
    };
};

const mapDispatchToProps = { updateSession, updateBreak, togglePause, updateTimeLeft, updateStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Display);