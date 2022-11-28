import { observer } from 'mobx-react-lite';

import { useEventStore } from '../EventStore';

function EventName() {
  const { setName } = useEventStore();

  return (
    <input
      type="text"
      className="caret-rise-primary font-bold text-xl w-full placeholder:text-rise-grayscale-gray400 focus:outline-none"
      placeholder="Event name"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

export default observer(EventName);
