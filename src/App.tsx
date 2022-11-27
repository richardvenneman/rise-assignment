import Attendee from './components/Attendee.js';
import Candidate from './components/Candidate.js';

const people = [
  {
    id: 1,
    name: 'Rick Pastoor',
    email: 'rick@risecalendar.com',
  },
  {
    id: 2,
    name: 'Willem Spruijt',
    email: 'willem@risecal.com',
  },
  {
    id: 3,
    name: 'Robin van Dijke',
    email: 'robin@risecal.com',
  },
  {
    id: 4,
    name: 'Jelle Prins',
    email: 'jelle@risecal.com',
  },
  {
    id: 5,
    name: 'Emiel Janson',
    email: 'emiel@risecalendar.com',
  },
];

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      <main className="md:flex-auto"></main>
      <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
        <form className="relative">
          <input
            type="text"
            className="caret-rise-primary font-bold text-xl w-full placeholder:text-rise-grayscale-gray400 focus:outline-none"
            placeholder="Event name"
          />

          <div className="absolute top-9 w-72 bg-rise-grayscale-white drop-shadow-elevation-400 rounded-lg px-1 py-1 space-y-1">
            <Candidate key="2" {...people[2]} />
            <Candidate key="3" {...people[3]} />
          </div>
        </form>
        <div className="flex mt-4">
          <div className="w-20 mr-2 text-s text-rise-grayscale-gray600 font-medium">
            Attendees
          </div>
          <div className="space-y-1">
            {people.map((person) => (
              <Attendee key={person.id.toString()} {...person} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
