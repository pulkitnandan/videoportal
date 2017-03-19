import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux';
import { login } from '../actions/authActions';

import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../validations/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => {
            Router.push('/')
        },
        (err) => {
            console.log(JSON.stringify(err));
            console.log(err);
            this.setState({ errors: {form:true, data: err.response.data.error}, isLoading: false, password:'' })
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        { errors.form && <div className="alert alert-danger">{errors.data}</div> }

        <TextFieldGroup
          field="username"
          label="Username"
          value={username}
          error={errors.username}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
