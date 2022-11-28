import { observer } from 'mobx-react-lite';

import { useEventStore } from '../EventStore';
import Person from '../types/Person';
import Suggestion from './Suggestion';

function Suggestions() {
  const { suggestions } = useEventStore();

  if (suggestions.length > 0) {
    return (
      <div className="absolute top-9 w-72 bg-rise-grayscale-white drop-shadow-elevation-400 rounded-lg px-1 py-1 space-y-1">
        {suggestions.map((person: Person) => (
          <Suggestion key={person.id.toString()} person={person} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default observer(Suggestions);
