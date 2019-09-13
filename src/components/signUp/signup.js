import React, { Component } from 'react';
import './signup.css';
import * as mat from 'material-ui';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class SignUp extends Component {
    bloodgroups;
    constructor(props) {
        super(props);
        this.bloodgroups = [
            "A+",
            "B+",
            "AB+",
            "O+",
            "A-",
            "B-",
            "AB-",
            "O-"
        ]
        this.state = { email: '', password: '', name: '', gender: 1, address: '', bloodType: "O+" };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        //This is called for Loading Initial State
        this.props.loadInitialState();
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.application && this.props.application.user) {
                browserHistory.push('/dashboard');
            }
        }, 5)
    }

    handleBloodTypeChange = (event, index, value) => this.setState({ bloodType: value });
    handleGenderTypeChange = (event, index, value) => this.setState({ gender: value });

    handleLoginSubmit(evt) {
        evt.preventDefault();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var name = this.refs.name.getValue();
        var gender = this.state.gender;
        var address = this.refs.address.getValue();
        var bloodType = this.state.bloodType;
        var cellNumber = this.refs.cellNumber.getValue();
        var userObj = { email: email, password: password, name: name, gender: gender, address: address, bloodType: bloodType, cellNumber: cellNumber, isDonor : false };
        this.props.signUpRequest(userObj);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { application } = this.props.application;
        return (
            <div className="main-login-div">
                <mat.Card>
                    <mat.CardTitle title="Sign Up" />
                    <mat.CardText>
                        <p>Already Have account? <Link to="/login">Login</Link></p>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <mat.Divider />
                            <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                className="full-width-container"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <h3>Personal Info</h3>
                            <mat.Divider />
                            <mat.TextField
                                hintText="John Doe"
                                floatingLabelText="Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="1231121234"
                                floatingLabelText="Cell Number"
                                className="full-width-container"
                                ref="cellNumber"
                                name="cellNumber"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.SelectField
                                ref="gender"
                                name="gender"
                                floatingLabelText="Gender"
                                onChange={this.handleGenderTypeChange}
                                className="full-width-container"
                                value={this.state.gender}
                                required={true}
                                >
                                <mat.MenuItem value={1} primaryText="Male" />
                                <mat.MenuItem value={2} primaryText="Female" />
                            </mat.SelectField>
                            <mat.SelectField
                                ref="bloodType"
                                name="bloodType"
                                floatingLabelText="Blood Type"
                                onChange={this.handleBloodTypeChange}
                                value={this.state.bloodType}
                                className="full-width-container"
                                required={true}
                                >
                                {
                                    this.bloodgroups.map(bloodgroup => {
                                        return <mat.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                                    })
                                }
                            </mat.SelectField>
                            <br />
                            <mat.TextField
                                hintText="MultiLine with rows: 2 and rowsMax: 4"
                                multiLine={true}
                                className="full-width-container"
                                rows={3}
                                rowsMax={3}
                                ref="address"
                                name="address"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default SignUp;