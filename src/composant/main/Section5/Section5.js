import React from 'react'
import './Section5.css'
export const Section5 = (props) => {
    return (
        <div>
            <section className="main-section5">
                <div className="part-gauche-sect5">
                    <p className="para1-sect5">The world's</p>
                    <p className="para1-sect5">biggest healthcare platform</p>
                    <p className="para2-sect5">
                        We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                    <img className="img-sect5" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3" alt="" title="image" />
                </div>


                <div className="part-droite-sect5">
                    {props.items.map((el, i) =>
                        <div className={el.active ? "box1 box test" : "box1 box"}>
                            <img src={el.image} alt="" title="flag" />
                            <p className="para-sect5">{el.para1}</p>
                            <p className="description_box">{el.para2}</p>
                        </div>

                    )}

                </div>

            </section>






        </div>
    )
}

export default Section5