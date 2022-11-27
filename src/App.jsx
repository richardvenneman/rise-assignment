import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      <main className="md:flex-auto"></main>
      <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
        <form>
          <input type="text" className="font-bold text-xl w-full placeholder:text-rise-grayscale-400 focus:outline-none" placeholder="Event name" />
        </form>
      </aside>
    </div>
  )
}

export default App
