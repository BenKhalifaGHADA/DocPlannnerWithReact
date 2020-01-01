import React from 'react'
export const ListCountry = (props) => {
    return (
        <div>
            <select className="select-pays">{props.data.map((x,y) => <option key={y}>{x}</option>)}</select>;
        </div>
    )
}

export default ListCountry