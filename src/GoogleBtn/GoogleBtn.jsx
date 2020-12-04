import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { withRouter } from 'react-router-dom';

export const localStorageToken = 'bee_scale_login_token';
const CLIENT_ID =
  '534441285044-icckh2r5sus8m9tts77ceumeklfnsblq.apps.googleusercontent.com';
class GoogleBtn extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    const token = JSON.parse(localStorage.getItem(localStorageToken));
    const isLogedIn = Boolean(token);
    this.state = {
      isLogined: isLogedIn,
      accessToken: token,
    };
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  componentDidMount() {
    console.log(
      'is in localStoage',
      JSON.parse(localStorage.getItem(localStorageToken)),
    );
    const token = JSON.parse(localStorage.getItem(localStorageToken));
    const isLogedIn = Boolean(token);
    this.setState({
      isLogined: isLogedIn,
      accessToken: token,
    });
  }
  login(response) {
    if (response.accessToken) {
      this.history.push('/prehled');
      localStorage.setItem(
        localStorageToken,
        JSON.stringify(response.accessToken),
      );
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
    }
  }
  logout(response) {
    localStorage.removeItem(localStorageToken);
    this.history.push('/');
  }
  handleLoginFailure(response) {
    alert('Failed to log in');
  }
  handleLogoutFailure(response) {
    alert('Failed to log out');
  }
  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Odhlásit"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Pokračovat přes Google"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}
export default withRouter(GoogleBtn);
