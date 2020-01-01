import React from 'react'
import './Section8.css'
export const Section8 = (props) => {
    return (
        <div>
            <section className="section8">
                <div className="haut-section8">

                    <div className="bloc1-haut">
                        {props.items.map((el,i)=>(
                            <a className="link-sect7" href={el.href}>
                            <figure>
                                <img src={el.image} alt="" />
                                <figcaption>
                                    <span>{el.textSpan}</span>
                                    <button className="see-open" type="button">{el.boutton}</button>
                                </figcaption>

                            </figure>
                        </a>
                        ))}
                        
                    </div>

            
                    
                </div>
            </section>
        </div>
    )
}

export default Section8