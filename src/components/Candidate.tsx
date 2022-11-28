import { useStore } from '../store';
import Person from '../types/Person';

function Candidate({ id, name, email }: Person) {
  const { eventStore } = useStore();
  const avatar = new URL(`../assets/avatars/${id}.jpeg`, import.meta.url).href;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    eventStore.addAttendee = id;
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-left py-1 rounded-lg w-full hover:bg-rise-grayscale-gray50"
    >
      <img src={avatar} className="h-6 w-6 mx-2 rounded-full" alt={name} />
      <div>
        <div className="text-s font-medium leading-none">{name}</div>
        <div className="leading-none pt-[1px]">
          <span className="mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">
            {email}
          </span>
        </div>
      </div>
    </button>
  );
}

export default Candidate;
