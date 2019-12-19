import React,{Component} from 'react'
import { Link, Redirect } from 'react-router-dom';

class  Place extends Component  {

   render(){
  
    return (
       

         <div >
             

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
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">300$</p>
             <h4>Sedney </h4>
             <p>4 days / 3 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">250$</p>
             <h4>Atlantis island</h4>
             <p>3 days / 2 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">350$</p>
             <h4>White beach , Sirilank</h4>
             <p>4 days / 3 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         </div>
         <div class="upper">
            <div class="box b5"></div>
             <div class="box b6"></div>
             <div class="box b7"></div>
             <div class="box b8"></div>
          </div>
          <div class="sm-box">
            <p class="money">200$</p>
             <h4>Maldives island</h4>
             <p>3 days / 2 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">200$</p>
             <h4>Maldives island</h4>
             <p>3 days / 2 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">200$</p>
             <h4>Maldives island</h4>
             <p>3 days / 2 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         <div class="sm-box">
            <p class="money">200$</p>
             <h4>Maldives island</h4>
             <p>3 days / 2 nights</p>
             <button><Link to='/request'>Order</Link></button>
         </div>
         </div>
    )}
}
export default Place