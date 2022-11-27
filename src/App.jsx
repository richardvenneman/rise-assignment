import Person from './components/Person.jsx'

const people = [
  {
    name: "Rick Pastoor",
    email: "rick@risecalendar.com",
    avatarFilename: "1.jpeg"
  },
  {
    name: "Willem Spruijt",
    email: "willem@risecal.com",
    avatarFilename: "2.jpeg"
  },
  {
    name: "Robin van Dijke",
    email: "robin@risecal.com",
    avatarFilename: "3.jpeg"
  },
  {
    name: "Jelle Prins",
    email: "jelle@risecal.com",
    avatarFilename: "4.jpeg"
  },
  {
    name: "Emiel Janson",
    email: "emiel@risecalendar.com",
    avatarFilename: "5.jpeg"
  },
]

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
            {people.map((person) =>
              <Person { ...person } />
            )}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default App
