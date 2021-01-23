import React from 'react'
import cover from '../cover.gif';
import spin from '../spin.gif';
import cookies2 from '../cookies2.gif';
import cookies3 from '../cookies3.gif';
import '../Orders.css';



const Home = () => {
    return (
        <div  className="ItemForm">
            <h1>Joyful Bites Bakery</h1>
            <img src={cover} alt="cover" height={550} width={1400}/>
            <img src={cookies2} alt="cookies2" height={300} width={300}/>
            <img src={spin} alt="spin" height={300} width={300}/>
            <img src={cookies3} alt="cookies3" height={300} width={300}/>


        </div>
    )
}

export default Home