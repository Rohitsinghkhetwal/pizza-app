import React from 'react';
import Pepperoni from "../assets/pepperoni.jpg";
import "../styles/About.css"; 

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${Pepperoni}`}}>What's up yo</div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatem dolore iusto soluta, commodi consectetur, id architecto accusamus sapiente porro repellendus illum quae enim veritatis delectus exercitationem est nulla. Nobis eveniet nostrum, harum delectus ratione autem quaerat similique aspernatur eaque natus, recusandae nisi quas voluptate magnam magni. Sint iusto quasi debitis doloribus enim asperiores modi, assumenda, quas quis repellendus, quae libero perspiciatis. Accusantium corrupti repellendus accusamus ipsum saepe, unde, iusto doloribus rem illum, provident dolor earum?</p>
            </div>

            
        </div>
    )
}

export default About;
