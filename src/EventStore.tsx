import { makeAutoObservable } from 'mobx';
import React, { useContext, useRef } from 'react';

import Person from './types/Person';

export default class EventStore {
  constructor(people: Person[]) {
    this.people = people;

    makeAutoObservable(this);
  }

  people: Person[] = [];

  name = '';
  setName = (name: string) => {
    this.name = name;
  };

  attendees: Person[] = [];
  addAttendee = (id: number) => {
    const attendee = this.people.find((person) => {
      return person.id === id;
    });

    if (attendee) {
      this.attendees.push(attendee);
    }
  };

  get shouldSuggest(): boolean {
    return this.name.length > 2;
  }

  get suggestions(): Person[] {
    if (!this.shouldSuggest) {
      return [];
    } else {
      return this.people.filter((person) => {
        return (
          !this.attendees.find((attendee) => {
            return attendee.id === person.id;
          }) && person.name.toLowerCase().includes(this.name.toLowerCase())
        );
      });
    }
  }
}

const EventStoreContext = React.createContext<EventStore>(null as unknown as EventStore);
export const useEventStore = () => useContext(EventStoreContext);

type Props = {
  children: React.ReactNode;
  people: Person[];
};

export function EventStoreProvider({ children, people }: Props) {
  const store = useRef(new EventStore(people));

  return (
    <EventStoreContext.Provider value={store.current}>
      {children}
    </EventStoreContext.Provider>
  );
}
