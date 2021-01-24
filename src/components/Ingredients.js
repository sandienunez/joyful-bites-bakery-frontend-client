import React from 'react'
import ingredients from '../ingredients.jpg';
import '../Orders.css';


const Ingredients = () => {
    return (
        <div className= "Orders">
        <h2>List of our Whole Ingredients that are locally sourced: </h2>
        <li> Gluten Free Flour Blend (Oat, Tapioca, Potato Starch) 
        </li>
        <li>Coconut Sugar</li>
        <li>Coconut Oil (Sustainably Sourced, Rspo Certified)</li>
         <li>Dairy free home-made chocolate chunks </li>
          <li>Filtered Water</li>
           <li>Molasses</li>
           <li>Vanilla Extract</li> 
           <li>Sea Salt</li>
           <li>Chia Seeds</li>
            <li>Baking Soda</li>
            <li>Apple Sauce </li>
            <li>Cinnamon </li>
            <img src={ingredients} alt="ingredients" height={500} width={1700
            }/>
        </div>
    )
}

export default Ingredients;