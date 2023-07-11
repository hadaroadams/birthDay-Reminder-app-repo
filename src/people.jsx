import React, { useState } from 'react'
import { data } from './data'
import './People.css'

function People() {
  const [people, setPeople]= useState(data)
  return (
    <div className='people'>
      <h2>{people.length} Birthdays Today</h2>
      {
        people.map((item)=>{
          return (
            <article key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='details'>
                <h3>{item.name}</h3>
                <p>{item.age} years</p>
               </div>
            </article>
          )
        })
      }
      <button onClick={()=>{setPeople([])}}>clear all</button>
    </div>
  )
}

export default People
