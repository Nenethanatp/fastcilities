import { useEffect, useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';

function Slot({ slot }) {
  const { usedTimeSlots, selectedTimeSlots, setSelectedTimeSlots } =
    useUserContext();
  const [clickedStyle, setClickedStyle] = useState();

  const handleClickSlot = () => {
    if (clickedStyle) {
      setClickedStyle(null);
    } else {
      setClickedStyle('ring-2 ring-greenSky');
    }

    const newSelectedTimeSlots = [...selectedTimeSlots];
    const index = selectedTimeSlots.indexOf(slot);
    if (index === -1) {
      newSelectedTimeSlots.push(slot);
      setSelectedTimeSlots(newSelectedTimeSlots);
    } else {
      newSelectedTimeSlots.splice(index, 1);
      setSelectedTimeSlots(newSelectedTimeSlots);
    }
  };

  let classStyle = '';
  if (usedTimeSlots.includes(slot)) {
    classStyle = 'text-white bg-gray-300   ';
  } else {
    classStyle = 'text-gray-700 bg-white  ';
  }

  return (
    <button
      type="button"
      disabled={usedTimeSlots.includes(slot)}
      className={`${classStyle} font-medium rounded-lg text-sm px-5 py-3 text-center  w-64 h-12 m-3 ${clickedStyle}`}
      onClick={handleClickSlot}
    >
      {slot}
    </button>
  );
}

export default Slot;
