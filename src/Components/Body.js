import React from 'react'
import './Body.css'

export default function Body() {
    return (
        <div className ='body-cont'>
            <div className="container">
                <label className = 'body-label'>Enter Text below!</label>
                <textarea className='txt-area' rows='6'></textarea>
            </div>
        </div>
    )
}
