import create from "zustand";
import {devtools, persist} from 'zustand/middleware'
let settingStore = (set)=>({

    dark:false,
    toggleDarkMode:()=>set((state)=>({
        dark:!state.dark
    }))
})
let peopleStore = (set)=>({
    people:['John Doe', "Jane Doe"],
    addPerson:(person)=>set((state)=>(
        {
            people:[...state.people, person]
        }
    )),

})
  settingStore = devtools(settingStore)
  settingStore = persist(settingStore)
  peopleStore =devtools(peopleStore)
export  const useSettingsStore = create(settingStore)
export const usePeopleStore = create(peopleStore)

