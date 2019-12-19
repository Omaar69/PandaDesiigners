import React,{Component} from 'react'
import { Link, Redirect } from 'react-router-dom'

class Hotels extends Component {
    render() {
        return (
            <div>
                <div class="upper">
         <div class="box b1 h1"></div>
         <div class="box b2 h2"></div>
         <div class="box b3 h3"></div>
         <div class="box b4 h4"></div>
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
         <div class="box b1 h5"></div>
         <div class="box b2 h6"></div>
         <div class="box b3 h7"></div>
         <div class="box b4 h8"></div>
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
            </div>
        )}
}
export default Hotels;
