import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Header = ({startLogout}) => (
    <header>
    <nav>
        <h1> Expensify </h1>
        <ol>
        <li><NavLink to="/home" activeClassName="is-active" > Home </NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active" > create </NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active" > help </NavLink></li>
        <li><button onClick={startLogout} >Logout</button></li>
        </ol>
    </nav>
       
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);