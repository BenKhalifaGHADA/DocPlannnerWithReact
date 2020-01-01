import React from 'react'
import './Section4.css'
export const Section4 = (props) => {
    return (
        <div>
            <section className="main-section4">
                <p className="p-section4">We are a global company
    with local culture</p>
                <ul className="list-section4">
                    {props.items.map((el,i)=>(
                         <li key={i} className="li-sect4">
                        <a href="http://www.google.fr"><svg className="svg-sect4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 32">
                        <path d={el}></path>
                    </svg>
                    </a> 
                    </li>))}
                   
                </ul>
            </section>
        </div>
    )
}

export default Section4