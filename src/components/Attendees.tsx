import { observer } from 'mobx-react-lite';

import { useEventStore } from '../EventStore';
import Person from '../types/Person';
import Attendee from './Attendee';

function Attendees() {
  const { attendees } = useEventStore();

  return (
    <>
      {attendees.map((attendee: Person) => (
        <Attendee key={attendee.id.toString()} person={attendee} />
      ))}
    </>
  );
}

export default observer(Attendees);
