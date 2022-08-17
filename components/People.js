import React from 'react'
import {usePeopleStore} from '../pages/store'

const People = () => {
    const people = usePeopleStore(state => state.people)
  return (
    <div>
        <p>We have {people.length} people in our room</p>
        <ul>
            {people.map((p, i)=>(
                <li key={i}>{p}</li>
            ))}
        </ul>
    </div>
  )
}

export default People