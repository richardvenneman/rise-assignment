import { makeAutoObservable } from 'mobx';
import React, { useContext, useRef } from 'react';

import Person from './types/Person';
import { personWithMatches } from './utils/personUtils';

export default class EventStore {
  constructor(people: Person[]) {
    this.people = people;

    makeAutoObservable(this);
  }

  people: Person[] = [];

  name = '';
  setName = (name: string) => {
    this.name = name;

    if (this.shouldSuggest) {
      this.setSuggestions();
    }
  };

  get nameLastWord(): string {
    return this.name.split(' ').pop() || '';
  }

  get shouldSuggest(): boolean {
    return !this.name.endsWith(' ') && this.nameLastWord.length > 2;
  }

  suggestions: Person[] = [];
  setSuggestions() {
    this.suggestions = this.people
      .filter((person) => {
        return !this.isAttendee(person);
      })
      .map((person) => {
        return personWithMatches(person, this.nameLastWord);
      })
      .filter((person): person is Person => !!person);
  }

  attendees: Person[] = [];
  addAttendee = (id: number) => {
    const attendee = this.people.find((person) => {
      return person.id === id;
    });

    if (attendee) {
      this.attendees.push(attendee);
      this.suggestions = [];

      const lastWordIndex = this.name.lastIndexOf(this.nameLastWord);
      const newName = this.name.substring(0, lastWordIndex) + attendee.firstName;
      this.name = newName;
    }
  };

  isAttendee = (person: Person) => {
    return this.attendees.find((attendee) => {
      return attendee.id === person.id;
    });
  };
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
