import React, {useEffect} from "react"
import People from "../components/People"
import Input from "../components/Input"
import {useSettingsStore} from "./store"

export default function Home() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode)
  const dark = useSettingsStore((state) => state.dark)
useEffect(()=>{
if(dark){
  document.querySelector('body').classList.add('dark');
  document.querySelector('.toggleBtn').textContent = 'Light mode'

}else{
  document.querySelector('body').classList.remove('dark');
  document.querySelector('.toggleBtn').textContent = 'dark mode'

}
}, [dark])
  
  return (
    <div className="main" >
      <button className="toggleBtn" onClick={toggleDarkMode}>dark mode</button>
      
      <p>People</p>
      <Input/>

      <People/>
    </div>
  )
}
