import React from 'react'
import happy from '../happy.gif'; 
import yoga from '../yoga.gif'; 
import run from '../run.gif'; 
import run2 from '../run2.gif'; 
import '../Orders.css';

function Mission() {
    return (
        <div >
            <img src={happy} alt="happy" height={300} width={300}/>
            <h1>Our Mission: </h1>
            <h2>To restore the world with healthy treats that makes you feel happy, healthy and whole. </h2>
            <img src={yoga} alt="yoga" height={300} width={300}/>
            <img src={run} alt="run" height={300} width={300}/>
            <img src={run2} alt="run2" height={300} width={300}/>



        </div>
    )
}

export default Mission; 