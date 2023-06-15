import React from 'react'
import "../stylesComponents/Location.css"
const Location = ({ location }) => {


    return (

        <article className='location_info'>
            <div className='location_title'>
                <p><span>Location name: </span>{location?.name}</p>
            </div>
            <ul className='location_info_list'>
                <li><span>Type:</span> {location?.type}</li>
                <li><span>Dimension:</span>  {location?.dimension}</li>
                <li><span>Nº Residents:</span> {location?.residents.length}</li>
                <li><span>ID:</span>&nbsp;{location?.id}</li>
            </ul>
        </article>

    )
}

export default Location