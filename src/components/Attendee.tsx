/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as CheckMarkCircle } from '../assets/icons/Checkmark-Circle.svg';
import Person from '../types/Person';
import { fullName } from '../utils/personUtils';

function Attendee({ person }: { person: Person }) {
  const avatar = new URL(`../assets/avatars/${person.id}.jpeg`, import.meta.url).href;

  return (
    <div className="flex items-center py-1">
      <img src={avatar} className="h-6 w-6 mx-2 rounded-full" alt={fullName(person)} />
      <div>
        <div className="text-s font-medium leading-none">{fullName(person)}</div>
        <div className="flex leading-none pt-[1px]">
          <CheckMarkCircle className="w-3 h-3" />
          <span className="ml-[2px] mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

export default Attendee;
