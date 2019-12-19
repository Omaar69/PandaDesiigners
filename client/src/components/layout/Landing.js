import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/#!' />;
  }

  return (
    <div>
        
      
     <section class="s2">
     <h1>Our Popular Places</h1>
     <div class="upper">
         <div class="box b1"></div>
         <div class="box b2"></div>
         <div class="box b3"></div>
         <div class="box b4"></div>
     </div>
     <div class="lower">
         <div class="sm-box">
            <p class="money">200$</p>
             <h4>Maldives island</h4>
             <p>3 days / 2 nights</p>
         </div>
         <div class="sm-box">
            <p class="money">300$</p>
             <h4>Sedney </h4>
             <p>4 days / 3 nights</p>
         </div>
         <div class="sm-box">
            <p class="money">250$</p>
             <h4>Atlantis island</h4>
             <p>3 days / 2 nights</p>
         </div>
         <div class="sm-box">
            <p class="money">350$</p>
             <h4>White beach , Sirilank</h4>
             <p>4 days / 3 nights</p>
         </div>
     </div>
     
     
 </section>
 
 <section class="s1 footer">
     <div class="d1">
      <h1>Subscribe to our Newsletter</h1>
     <input type="email" placeholder="Enter your email"></input>
     <input type="submit" value="Subscribe" class="sub"></input>
     </div>
     </section>



 </div>
    
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
