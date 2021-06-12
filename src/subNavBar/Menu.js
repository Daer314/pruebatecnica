import React from 'react'
import './Menu.css'
export default function Menu() {
    return (
        <div className = 'menu'>
            <div className = 'menuicon'>
                <p className = 'text menuicon'>Menu</p> 
            </div>
            <div className = 'menutabs'>
                <p className = 'text'>Movilidad</p>
                <p className = 'text'>Cuidado del hogar</p>
                <p className = 'text'>Profesionales de la salud</p>
                <p className = 'text'>Tapabocas y desinfeccion</p>
            </div>          
        </div>
    )
}
