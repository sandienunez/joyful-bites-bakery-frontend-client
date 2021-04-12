import React from 'react'
import cookiemonster from '../cookiemonster.gif'; 
import '../Orders.css';



const OurStory = () => {
    return (
        <div className="Orders">
            <h2>Our Story</h2>
            <h4>We are a team of joyful bakers ready to set the world on fire with healthy, nutritious and delicious treats! </h4>
            <h4>Joyful Bites was born from the idea of using healhy whole food in the baked goods that makes people feel good. </h4>
            <img src={cookiemonster} alt="cookiemonster" height={300} width={300}/>

        </div>
    )
}

export default OurStory