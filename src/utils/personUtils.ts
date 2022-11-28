import Person from '../types/Person';

export function fullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}
