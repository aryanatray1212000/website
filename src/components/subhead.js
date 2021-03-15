import React from 'react'
import './subhead.css';

function subhead() {
    return (
        <div className="subhead">
            <div className="un"><h1 className="tx">Union Square,San Francisco,CA</h1></div>
            <div className="bor"> 
              <div><h1 className="tx" >Check In:12/14/2020</h1></div>
              <div className="b1"><h1 className="tx">Check Out:12/18/2020</h1></div>
            </div>
            <div className="bor2"><h1 className="tx">4 rooms for 22 guests &#8744;</h1></div>
            <div className="last">
                <a className="word" href="">search</a>
            </div>
        </div>
    )
}

export default subhead
