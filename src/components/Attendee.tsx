import checkMarkCircle from '../assets/icons/Checkmark-Circle.svg';
import { PersonProps } from '../types/Person';

function Attendee({ id, name }: PersonProps) {
  const avatar = new URL(`../assets/avatars/${id}.jpeg`, import.meta.url).href;

  return (
    <div className="flex items-center py-1">
      <img src={avatar} className="h-6 w-6 mx-2 rounded-full" alt={name} />
      <div>
        <div className="text-s font-medium leading-none">{name}</div>
        <div className="flex leading-none pt-[1px]">
          <img className="w-3 h-3" src={checkMarkCircle} alt="" />
          <span className="ml-[2px] mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

export default Attendee;
