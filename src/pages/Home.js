import React from 'react';
import {Link} from "react-router-dom";
import ImageBanner from "../assets/pizza.jpeg";
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${ImageBanner}`}}>
            <div className="headerContainer" >
                <h1>SPICY Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
            
            
        </div>
    )
}

export default Home;
