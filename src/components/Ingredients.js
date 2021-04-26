import React from 'react'
import ingredients from '../ingredients.jpg';
import '../Orders.css';


const Ingredients = () => {
    return (
        <div className= "Orders">
        <h2>Our Whole Ingredients list that are locally sourced: </h2>
        <li> Gluten Free Flour Blend (Oat, Tapioca, Potato Starch) 
        </li>
        <li>Coconut Sugar</li>
        <li>Coconut Oil (Sustainably Sourced, Gluten-Free Certified)</li>
         <li>Dairy free home-made chocolate chunks </li>
          <li>Filtered Water</li>
           <li>Molasses</li>
           <li>Vanilla Extract</li> 
           <li>Sea Salt</li>
           <li>Chia Seeds</li>
            <li>Baking Soda</li>
            <li>Apple Sauce </li>
            <li>Cinnamon </li>
            <li>Flax Seeds</li>
            <li>Hemp Hearts</li>
            <li>Maple Syrup</li>
            <li>Dates</li>
            <li>Coconut Flakes</li>


            <img src={ingredients} alt="ingredients" height={500} width={1700
            }/>
        </div>
    )
}

export default Ingredients;