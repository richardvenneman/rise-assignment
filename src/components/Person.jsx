import checkMarkCircle from '../assets/icons/Checkmark-Circle.svg'

function Person(props) {
  const avatar = new URL(`../assets/avatars/${props.avatarFilename}`, import.meta.url).href
    
  return (
	  <li className="flex items-center w-[200px] py-1">
      <img src={avatar} className="h-6 w-6 mx-2 rounded-full" />
      <div>
      <div className="text-s font-medium leading-none">{props.name}</div>
      <div className="flex leading-none pt-[1px]">
        <img className="w-3 h-3" src={checkMarkCircle} />
        <span className="ml-[2px] mt-[1px] text-xxs text-rise-grayscale-gray600 font-medium">Available</span>
      </div>
      </div>
    </li>
  )
}

export default Person