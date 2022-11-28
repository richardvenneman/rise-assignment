import { Observer } from 'mobx-react-lite';

import Attendees from './components/Attendees';
import Candidate from './components/Candidate';
import EventName from './components/EventName';
import { EventStoreProvider, useEventStore } from './EventStore';
import Person from './types/Person';

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

const App = () => {
  const people = getPeople();

  return (
    <EventStoreProvider people={people}>
      <Observer>
        {() => {
          const { suggestions } = useEventStore();

          return (
            <div className="flex flex-wrap h-screen">
              <main className="md:flex-auto"></main>
              <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
                <form className="relative overflow-visible" autoComplete="off">
                  <EventName />

                  {!!suggestions && suggestions.length > 0 && (
                    <div className="absolute top-9 w-72 bg-rise-grayscale-white drop-shadow-elevation-400 rounded-lg px-1 py-1 space-y-1">
                      {suggestions.map((person: Person) => (
                        <Candidate key={person.id.toString()} {...person} />
                      ))}
                    </div>
                  )}
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
          );
        }}
      </Observer>
    </EventStoreProvider>
  );
};

export default App;
