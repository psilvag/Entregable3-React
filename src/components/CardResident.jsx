import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const CardResident = ({url}) => {

const [resident,setResident]=useState()


useEffect(()=>{
    
     axios.get(url)
    .then(res=>setResident(res.data))
    .catch(err=>console.log(err))
  
  },[])

 console.log(resident)

  return (
    <article className='card-resident-info'>
        <header className='card-header'>
        <img src={resident?.image} alt="image" />
        </header>
        <div className='status-info'>
                <div className={`${resident?.status==='unknown'? 'circle-unk':resident?.status==='Dead'? 'circle-dead':'circle'}`}></div>
                <span className='status-card'>{resident?.status}</span>
        </div>
        <section className='card-info'>
            
                <h3>{resident?.name}</h3>
                <ul className='card-list-info'>
                    <li><span>Specie:&nbsp;</span>{resident?.species}</li>
                    <li><span>Origin:&nbsp;</span>{resident?.origin.name}</li>
                    <li><span>Episodes where appeared:&nbsp;</span>{resident?.episode.length}</li>
                </ul>
         </section>

        
      
    </article>
  )

}

export default CardResident