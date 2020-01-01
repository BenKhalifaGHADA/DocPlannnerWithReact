import React from 'react'
import './Section3.css'
import Para from './Paraghraphe/Para.js'
export const Section3 = (props) => {
    return (
        <div>

            <section className="main-section3">
            <Para items={props.items}/>
            </section>
        </div>
    )
}

export default Section3