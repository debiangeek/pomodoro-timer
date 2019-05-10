import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';
import { updateSession, updateBreak, updateTimeLeft, updateStatus } from './../actions/actionCreators';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
        this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
        this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
        this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    }

    handleSessionIncrement() {
        if (!this.props.paused) {
            if (this.props.session < 60) {
            this.props.updateSession(this.props.session + 1);
            this.props.updateTimeLeft(this.props.timeLeft + 60);
            }
        }
    }

    handleSessionDecrement() {
        if (!this.props.paused) {
            if (this.props.session > 1) {
                this.props.updateSession(this.props.session - 1);
                this.props.updateTimeLeft(this.props.timeLeft - 60);
            }
        }
    }

    handleBreakIncrement() {
        if (!this.props.paused) {
            if (this.props.breakVal < 60) {
                this.props.updateBreak(this.props.breakVal + 1);
                if (this.props.status === 'Break') {
                    this.props.updateTimeLeft(this.props.timeLeft + 60);
                }
            }
        }
    }
    
    handleBreakDecrement() {
        if (!this.props.paused) {
            if (this.props.breakVal > 1) {
                this.props.updateBreak(this.props.breakVal - 1);
                if (this.props.status === 'Break') {
                    this.props.updateTimeLeft(this.props.timeLeft - 60);
                }
            }
        }
    }

    render() {
        return (
            <div id='settings' >
                <p id="session-label" className="label">Session Length</p>
                <div className='btn-wrapper'>
                    <i id='session-decrement' className='decrement far fa-caret-square-down' onClick={this.handleSessionDecrement}></i>
                    <p id='session-length' className="length">{this.props.session}</p>
                    <i id='session-increment' className='increment far fa-caret-square-up' onClick={this.handleSessionIncrement}></i>
                </div>
                <p id="break-label" className="label">Break Length</p>
                <div className='btn-wrapper'>
                    <i id='break-decrement' className='decrement far fa-caret-square-down' onClick={this.handleBreakDecrement}></i>
                    <p id='break-length' className="length">{this.props.breakVal}</p>
                    <i id='break-increment' className='increment far fa-caret-square-up' onClick={this.handleBreakIncrement}></i>
                </div>
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

const mapDispatchToProps = { updateSession, updateBreak, updateTimeLeft, updateStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);