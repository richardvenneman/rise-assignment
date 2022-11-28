import { Observer } from 'mobx-react-lite';

import Attendee from './components/Attendee.js';
import Candidate from './components/Candidate.js';
import EventName from './components/EventName.js';
import { useStore } from './store';

const App = () => {
  const { eventStore } = useStore();

  return (
    <Observer>
      {() => {
        const attendees = eventStore.attendees;
        const suggestions = eventStore.attendeeSuggestions;

        return (
          <div className="flex flex-wrap h-screen">
            <main className="md:flex-auto"></main>
            <aside className="bg-rise-grayscale-white flex-initial px-4 py-6 w-full md:w-80">
              <form className="relative overflow-visible" autoComplete="off">
                <EventName />

                {!!suggestions && suggestions.length > 0 && (
                  <div className="absolute top-9 w-72 bg-rise-grayscale-white drop-shadow-elevation-400 rounded-lg px-1 py-1 space-y-1">
                    {suggestions.map((person) => (
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
                  {attendees.map((attendee) => (
                    <Attendee key={attendee.id.toString()} {...attendee} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        );
      }}
    </Observer>
  );
};

export default App;
