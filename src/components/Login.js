import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div>
  <div className="login-form" >
    <div className="login-form__box" >
    <h1 className="login-form__title" > Expensy </h1>
    <p> Prenez le contrôle de vos dépenses <br />
    Follow your expenses !</p>
      <button className="loginBtn loginBtn--google" onClick={startLogin} >
      Login with Google
    </button>
   
    </div>
  </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);


// <button className="loginBtn loginBtn--facebook" onClick={startLoginFacebook} >
// Login with Facebook
// </button> 