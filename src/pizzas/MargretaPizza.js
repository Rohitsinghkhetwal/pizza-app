import React from 'react'
import Margreta from "../assets/margherita.jpg";
import "../styles/Buycomponent.css";

const MargretaPizza = () => {
    return (
        <>
            <div className='image-container'>
        <div
          className='image'
          style={{ backgroundImage: `url(${ Margreta})` }}
        ></div>
        <div className='heading'>
          <h1>Margrihta Pizza</h1>
          <h4>$11.99</h4>
        </div>
        <button>Buy now</button>
            
        </div>
        </>
    )
}

export default MargretaPizza
