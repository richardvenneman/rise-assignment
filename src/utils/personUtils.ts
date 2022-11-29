import highlightWords from 'highlight-words';

import Person from '../types/Person';

export function fullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

const MATCH_KEYS = ['firstName', 'lastName', 'email'];
export function personWithMatches(person: Person, query: string) {
  type PersonKey = keyof typeof person;
  let matches = false;

  const personWithMatches = Object.keys(person).reduce(
    (result, personKey) => {
      if (MATCH_KEYS.includes(personKey)) {
        const chunks = highlightWords({
          text: person[personKey as PersonKey] as string,
          query,
        });
        if (chunks[0].match) matches = true;

        result[personKey as PersonKey] = chunks
          .map(({ match, text }) =>
            match ? `<span class="text-rise-primary">${text}</span>` : text,
          )
          .join('');
      }

      return result;
    },
    { id: person.id } as Record<keyof Person, string | number>,
  );

  if (matches) {
    return personWithMatches;
  }
}
