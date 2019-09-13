import React, { Component } from 'react';
import { logOutRequest } from '../store/actions/logout';
import { connect } from 'react-redux';

import * as mat from 'material-ui';
import './logo.css';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    gotoDashoard = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/dashboard');
    };

    gotoAvailable = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/requiredBlood');
    };

    logOutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logOutRequest();
    }

    render() {
        return (
            <div>
                <mat.AppBar
                    title="Blood Banking System"
                    onLeftIconButtonTouchTap={this._handleClick}
                    />
                <mat.Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({ open })}>
                    <mat.MenuItem disabled className="disbaledImage"><img src="https://co50.com/wp-content/uploads/2013/10/Blood-Donor-Logo.png" className="logoImage" /></mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoDashoard}>Dashoard</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoAvailable}>Available Bloods</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.logOutRequest}>Logout</mat.MenuItem>
                </mat.Drawer>
                {this.props.children}
            </div>
        );
    }
}


function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {
        logOutRequest: () => dispatch(logOutRequest())
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;