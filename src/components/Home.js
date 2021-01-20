import React from 'react'
import spin from '../spin.gif';
import cookies2 from '../cookies2.gif';
import cookies3 from '../cookies3.gif';



const Home = () => {
    return (
        <div>
            <h1>Welcome to Joyful Bites Bakery</h1>
            <img src={cookies2} alt="cookies2" height={300} width={300}/>
            <img src={spin} alt="spin" height={300} width={300}/>
            <img src={cookies3} alt="cookies3" height={300} width={300}/>



        </div>
    )
}

export default Home