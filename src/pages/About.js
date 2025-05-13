import React from 'react'
import MultiplePizzes from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutContainer'>
                <div className='aboutInfo'>
                    <h1>ABOUT US</h1>
                    <p>At Suraj's Pizza Haven, we take pride in crafting the finest pizzas with the freshest ingredients. Whether you're in the mood for a classic Margherita, a loaded meat lover's delight, or something unique, we've got something for everyone. Our passion for pizza shines through every slice, and we’re committed to bringing you the best experience with every order.</p>
                </div>
                <div className='aboutImage' style={{ backgroundImage: `url(${MultiplePizzes})` }}></div>
            </div>
        </div>
    )
}

export default About
