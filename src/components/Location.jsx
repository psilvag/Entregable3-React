import React from 'react'

const Location = ({location}) => {
  
  
return (
    <div>
        <article className='location_info'>
            <div className='location_title'>
                 <span>Location name: {location?.name}</span>
            </div>
            <div >
            <ul className='info_list'>
                <li><span>Type:</span> {location?.type}</li>
                <li><span>Dimension:</span>  {location?.dimension}</li>
                <li><span>Nº Residents:</span> {location?.residents.length}</li>
            </ul>
            </div>
           
        </article>
    </div>  
  )
}

export default Location