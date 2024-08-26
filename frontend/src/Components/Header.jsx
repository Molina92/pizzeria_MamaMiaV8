import React from 'react'
import Image from 'react-bootstrap/Image';
import './Header.css';

export default function Header() {
    return (
        <div className='hero'>
            <div className='hero-content text-light'>
                <h1 className='hero-title '>
                    Pizzería Mamma Mia!
                </h1>
                <h2 className='hero-subtitle'>
                    Tenemos las mejores pizzas que podrás encontrar!
                </h2>
                <hr />
            </div>
        </div>
    )
}