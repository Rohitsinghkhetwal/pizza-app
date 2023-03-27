import React from 'react';
import { Instagram, Facebook, LinkedIn } from '@material-ui/icons';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram />
                <Facebook />
                <LinkedIn />


            </div>
            <p>&copy; 2021 RambostechPizza.com</p>
            
        </div>
    )
}

export default Footer;
