import { useState } from 'react'
import avatar1 from './assets/avatars/1.jpeg'
import avatar2 from './assets/avatars/2.jpeg'
import checkMarkCircle from './assets/icons/Checkmark-Circle.svg'
import './App.css'

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      <main className="md:flex-auto"></main>
      <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
        <form>
          <input type="text" className="caret-rise-primary font-bold text-xl w-full placeholder:text-rise-grayscale-gray400 focus:outline-none" placeholder="Event name" />
        </form>
        <div className="flex mt-4">
          <div className="w-20 mr-2 text-s text-rise-grayscale-gray600 font-medium">Attendees</div>
          <ul className="space-y-1">
            <li className="flex items-center w-[200px] py-1">
              <img src={avatar1} className="h-6 w-6 mx-2 rounded-full" />
              <div>
                <div className="text-s font-medium leading-none">Emiel Janson</div>
                <div className="flex leading-none pt-[1px]">
                  <img className="w-3 h-3" src={checkMarkCircle} />
                  <span className="ml-[2px] mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">Available</span>
                </div>
              </div>
            </li>
            <li className="flex items-center w-[200px] py-1">
              <img src={avatar2} className="h-6 w-6 mx-2 rounded-full" />
              <div>
                <div className="text-s font-medium leading-none">Rick Pastoor</div>
                <div className="flex leading-none pt-[1px]">
                  <img className="w-3 h-3" src={checkMarkCircle} />
                  <span className="ml-[2px] mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">Available</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default App
