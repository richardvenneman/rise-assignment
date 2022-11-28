import { observer } from 'mobx-react-lite';
import { createRef, useEffect } from 'react';

import { useEventStore } from '../EventStore';

function EventName() {
  const { name, setName } = useEventStore();
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <input
      type="text"
      className="caret-rise-primary font-bold text-xl w-full placeholder:text-rise-grayscale-gray400 focus:outline-none"
      placeholder="Event name"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      ref={inputRef}
    />
  );
}

export default observer(EventName);
