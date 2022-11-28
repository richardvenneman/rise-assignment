import { useStore } from '../store';

function EventName() {
  const { eventStore } = useStore();

  return (
    <input
      type="text"
      className="caret-rise-primary font-bold text-xl w-full placeholder:text-rise-grayscale-gray400 focus:outline-none"
      placeholder="Event name"
      onChange={(e) => {
        eventStore.title = e.target.value;
      }}
    />
  );
}

export default EventName;
