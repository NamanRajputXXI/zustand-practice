import React  from 'react'
import {usePeopleStore } from '../pages/store'
 const Input = () => {
    const inputRef = React.useRef()
    const addPerson = usePeopleStore(state => state.addPerson)
    const add = ()=>{
        addPerson(inputRef.current.value)
        inputRef.current.value = ''

    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={add}>Add Person</button>
    </div>
  )
}
export default Input