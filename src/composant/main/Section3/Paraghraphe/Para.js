import React from 'react'

import ListCountry from 'C:/Users/Ghada/Desktop/goMyCode/docplannerreact/src/composant/main/Section3/Select/ListCountry'
import ListCountryData from 'C:/Users/Ghada/Desktop/goMyCode/docplannerreact/src/composant/main/Section3/Select/ListCountryData.js'
export const Para = (props) => {
    return (
        <div className="composant-section3">
            
               {props.items.map((el,i)=>( 
                <div key={i} className="part-section3 part1-section3">
                    <p className="small-title">{el.title}</p>
                    <p className="h1-section3">{el.subtitle}</p>
                    {(el.selector)&&
                    <ListCountry data={ListCountryData} />}
                    <img className="img-sect3 img1-section3" src={el.image} alt="" />
                    </div>    
            ))}
         </div>
    )
}
export default Para
