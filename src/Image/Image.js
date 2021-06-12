import React from 'react'
import wall from './wall.png'

export default function image() {
    return (
        <div>
            <img 
                className='wall'
                alt='' 
                src={wall}>
            </img>
        </div>
    )
}
