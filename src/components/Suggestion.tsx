import { useEventStore } from '../EventStore';
import Person from '../types/Person';
import { fullName } from '../utils/personUtils';

function Suggestion({ person }: { person: Person }) {
  const { addAttendee } = useEventStore();
  const avatar = new URL(`../assets/avatars/${person.id}.jpeg`, import.meta.url).href;

  return (
    <button
      onClick={() => addAttendee(person.id)}
      className="flex items-center text-left py-1 rounded-lg w-full hover:bg-rise-grayscale-gray50"
    >
      <img src={avatar} className="h-6 w-6 mx-2 rounded-full" alt={fullName(person)} />
      <div>
        <div className="text-s font-medium leading-none">{fullName(person)}</div>
        <div className="leading-none pt-[1px]">
          <span className="mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">
            {person.email}
          </span>
        </div>
      </div>
    </button>
  );
}

export default Suggestion;
