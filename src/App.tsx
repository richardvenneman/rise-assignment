import Attendees from './components/Attendees';
import EventName from './components/EventName';
import Suggestions from './components/Suggestions';
import { EventStoreProvider } from './EventStore';

function getPeople() {
  return [
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
}

function App() {
  const people = getPeople();

  return (
    <EventStoreProvider people={people}>
      <div className="flex flex-wrap h-screen">
        <main className="md:flex-auto"></main>
        <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
          <form
            className="relative overflow-visible"
            autoComplete="off"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
          >
            <EventName />
            <Suggestions />
          </form>
          <div className="flex mt-4">
            <div className="w-20 mr-2 text-s text-rise-grayscale-gray600 font-medium">
              Attendees
            </div>
            <div className="space-y-1">
              <Attendees />
            </div>
          </div>
        </aside>
      </div>
    </EventStoreProvider>
  );
}

export default App;
