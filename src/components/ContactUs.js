import React from 'react'
import desserts from '../desserts.jpg';
import pink from '../pink.png';
import '../Orders.css';


const ContactUs = () => {
    return (
        <div className="Orders">
        <p></p>
         <img src={pink} alt="pink" height={550} width={1400}/>
            <h5>❤️ Please email us for any baking inquiries, special orders or events.</h5>
             <h5>🍪 We offer catering services for up to 500 guests. </h5>
            <h5>📍 Address: 1213 4th St. NW, Washington D.C. </h5>
            <h5>✉️ Email: joyfulbitesbakery@gmail.com</h5>
            <h5>☎️ Phone Number: 111-111-1111</h5>
            <h5>🧑🏽‍🍳Head Baker, CEO, Software Engineer: Sandie Nunez   </h5>
            <h5>🎨 Creative Director: Jean Nunez </h5>
            <h5> ⚖️ Attorney: Dr. Karoline Nunez-Vaughan </h5>
            <h5> ⚖️ Accountant: Nancy Nunez </h5>
            <h5> ⚖️ Chef: Pedro Nunez </h5>


            <img src={desserts} alt="desserts" height={500} width={500}/>
        </div>
    )
}

export default ContactUs