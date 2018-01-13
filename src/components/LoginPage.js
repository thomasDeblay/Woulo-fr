import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
<div className="logpage" >
  <div className="application">
    <div className="transfer">
      <div className="transfer__window" >
        <div className="transfer__contents" >
        <span className="illustration terms__image" > </span>
          <h1 className="box-layout__title">Woulo App</h1>
          
        </div>
        <div className="transfer__footer">
          <button className="loginBtn loginBtn--facebook transfer__button" onClick={startLogin} > Login with Facebook </button> 
        </div>
      </div>
      <div className="text-lp">
      <div className="text-lp__window" >
        <div className="transfer__contents" >
          <h1 className="text-lp__title">Découvre les meilleurs woulos</h1>
          <p className="text-lp__subtitle" > Et enflame le public avec le meilleur lyrics </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
