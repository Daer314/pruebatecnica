import React from 'react'
import logo from './logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className = 'navbar'>
                <img
                    className = 'logo'
                    alt= 'logo'
                    src = {logo}>
                </img>
                <input
                    className = 'inputbox'
                    value = '¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ...'>
                </input> 
                <div className = 'ptags'>
                    <p className = 'text'>MIS PEDIDOS</p>
                    <p className = 'text hola'>HOLA ALIAD@ 
                        <p className = 'ingresa'>INGRESA</p>
                    </p>
                    <p className = 'text'>CARRITO</p>
                </div>                     
            </div>         
        </div>
        

    )
}
