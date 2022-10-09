import Slot from './Slot';
import { slots } from '../../../config/constants';

function BookingSlot() {
  return (
    <>
      <div className="flex flex-wrap mx-auto w-4/5 justify-between ">
        {slots.map((slot, index) => {
          return <Slot key={index} slot={slot} />;
        })}
      </div>
    </>
  );
}

export default BookingSlot;
