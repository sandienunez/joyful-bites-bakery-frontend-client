import React from 'react'
import blueberry from '../blueberry.jpg';
import chocolate from '../chocolate.jpg';
import coconut from '../coconut.jpg';  


const MenuItems = () => {
    return (

           <div>
           <h1>Click below to check out menu: </h1>
           <button>Cookies </button> 
           
           <b><p></p></b>
        <img src={blueberry} alt="blueberry" height={200} width={200}/>
        <h3>Blueberry Lemon  </h3>
        <h4>$3.50  </h4>
        <b><p></p></b>

        <img src={chocolate} alt="chocolate" height={200} width={200}/>
        <h3>Chocolate Chip </h3>
        <h4>$3.00  </h4>

        <b><p></p></b>

        <img src={coconut} alt="coconut" height={200} width={200}/>
        <h3>Almond Coconut </h3>
        <h4>$3.25  </h4>
        <b><p></p></b>

               </div>
    )
  
}


export default MenuItems; 

// <button>
// Cupcakes
// </button>
// <button>
// Cakes
// </button>
// <button>
// Breads
// </button>
// <button>
// Energy Balls/Protein Bites
// </button>
