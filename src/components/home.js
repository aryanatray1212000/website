import React from 'react'
import './home.css'
function home() {
    return (
        <div className="home">
            <div className="c1">
            <div className="c">
             <input type="text" className="in1" placeholder="Hotel Name:"/>
             </div>
             <div className="crat">
              <div className="st1">
                  <h4>Star Rating:</h4>
              </div>
              <div class="select-size">
                <input type="radio" name="s-size" id="small"/>
                <input type="radio" name="s-size" id="medium" />
                <input type="radio" name="s-size" id="large" />
                <input type="radio" name="s-size" id="x-large" />
                <input type="radio" name="s-size" id="xx-large" />
                <input type="radio" name="s-size" id="x1-large" />

                <label for="small">5&#9733;</label>
                <label for="medium">4&#9733;</label>
                <label for="large">3&#9733;</label>
                <label for="x-large">2&#9733;</label>
                <label for="xx-large">1&#9733;</label>
                <label for="x1-large">0&#9733;</label>

                </div>
              
              
             </div>
             <div className="cpr">
               <div className="pri">
               <h4>Price:</h4>
               </div>
               <div>
               <input type="text" className="in2" placeholder="From:"/>
               </div>
               <div>
               <input type="text" className="in2" placeholder="To:"/>
               </div>
             </div>
             <div className="com">
                 <div className="f"><h4>Sort By:</h4></div>
           
            <div className="d"><select id="cars">
           <option value="volvo">Distance</option>
           <option value="saab">Restaurant</option>
           <option value="opel">Mall</option>
  
            </select></div>
           
  
             
             </div>
            </div>
            <div className="c2">
            <div className="c">
              <div className="clow1">
              <div className="">
                  <h4>Breakfast Included </h4>
              </div>
              <div>
                  <input type="checkbox" />
              </div>
              <div className="">
                  <h4>All Inclusive </h4>
              </div>
              <div>
                  <input type="checkbox" />
              </div>
              </div>
             </div>
             <div className="c">
             <div className="clow2">
             <div className="">
                  <h4>Reviews Rating: </h4>
              </div>
              <div className="end">
                 <div><h4>0</h4></div>
                  <div><input type="range" min="0" max="10" class="slider" /></div>
                  
                  <div><h4>10</h4></div>
              </div>
              
             </div>
             </div>
             <div className="clow3">
              <div className="">
                  <h4>Refundable Only</h4>
              </div>
              <div>
                  <input type="checkbox" />
              </div>
             </div>
             <div className="clow3">
             <div className="">
                  <h4>Show Selected Only </h4>
              </div>
              <div>
                  <input type="checkbox" />
              </div>
             </div>
             </div>
        </div>
    )
}

export default home
