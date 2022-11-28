import { makeAutoObservable } from 'mobx';

import Person from '../types/Person';

class EventStore {
  _title = '';
  attendees: Person[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get shouldSuggest(): boolean {
    return this._title.length > 2;
  }

  get attendeeSuggestions(): Person[] | void {
    if (!this.shouldSuggest) {
      return;
    } else {
      return people.filter((person) => {
        console.log(this.attendees, person);
        return (
          !this.attendees.includes(person) &&
          person.name.toLowerCase().includes(this._title.toLowerCase())
        );
      });
    }
  }

  set title(title: string) {
    this._title = title;
  }

  set addAttendee(id: number) {
    const attendee = people.find((person) => {
      return person.id === id;
    });

    if (attendee) {
      this.attendees.push(attendee);
    }
  }
}

export default EventStore;
