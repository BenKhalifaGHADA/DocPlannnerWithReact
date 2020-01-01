import React from 'react'
import './Section7.css'
export const Section7 = (props) => {
    return (
        <div>
            <section className="section7">
                <div className="haut-section7">
                    <div className="bloc1-haut">
                        {props.items.map((el, i) => (
                            <a key={i} className="link-sect7" href={el.href}>
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

export default Section7
