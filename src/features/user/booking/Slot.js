import { useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';

function Slot({ slot }) {
  const { usedTimeSlots, selectedTimeSlots, setSelectedTimeSlots } =
    useUserContext();

  const [clickedStyle, setClickedStyle] = useState('');
  console.log(selectedTimeSlots);

  const handleClickSlot = () => {
    if (clickedStyle) {
      setClickedStyle(null);
    } else {
      setClickedStyle('border-green-600  border');
    }

    const newSelectedTimeSlots = [...selectedTimeSlots];
    const index = selectedTimeSlots.indexOf(slot);
    if (index === -1) {
      selectedTimeSlots.push(slot);
    } else {
      newSelectedTimeSlots.splice(index, 1);
      setSelectedTimeSlots(newSelectedTimeSlots);
    }
  };

  let classStyle = '';
  if (usedTimeSlots.includes(slot)) {
    classStyle = 'text-white bg-red-500  border-gray-300  border ';
  } else {
    classStyle = 'text-gray-700 bg-white  border-gray-300  border ';
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
