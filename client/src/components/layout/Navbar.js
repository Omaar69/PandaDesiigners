import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    

    
    <ul>
      
      <li>
        <Link to='/Place'>Places</Link>
      </li>
      <li>
        <Link to='/Hotels'>Hotels</Link>
      </li>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
    
  );

  const guestLinks = (
    
    <ul>
      <li>
        <Link to='/Place'>Places</Link>
        </li>
       <li>
         <Link to='/Hotels'>Hotels</Link>
         </li>
      
      <li>
        <Link to='/register'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Sign In</Link>
      </li>
      
    </ul>
    
  );

  return (
    <div className="head">
      <div className="wel">
        <h1>Discover</h1>
        <h1>A new <span>Place</span></h1>
        <p>Find great places to stay, eat, shop, or visit from local experts</p>
    </div>
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i  />Trave<span>ll</span>a
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
