import { deleteMyBooking } from '../../../api/myBookingApi';
import dateFormat from 'dateformat';

function MyBookingCard({
  bookingDate,
  facility,
  bookingPeriod,
  bookingId,
  type,
}) {
  const { name, location, image } = facility;
  // console.log(facility);
  // console.log(type);
  const bookinDateNewFormat = dateFormat(bookingDate, 'ddd, dd mmm yy');

  const bookingPeriodString = bookingPeriod.join(', ');
  // console.log(bookingPeriodString);

  const handleClick = async () => {
    // console.log(bookingId);
    // await deleteMyBooking(bookingId);
  };

  let cardStyle = '';
  if (type === 'today') {
    cardStyle = 'border-2 border-green-700';
  }

  if (type === 'prev') {
    cardStyle = 'opacity-30';
  }
  return (
    <div className="w-full">
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div
          class={`flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-between items-center mb-3 px-10 ${cardStyle}`}
        >
          <img class="h-60" src={image} alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium ">{name}</h5>
            <h5 class="text-gray-900 text-xl font-medium mb-2">{location}</h5>
            <p class="text-gray-700 text-base ">Date : {bookinDateNewFormat}</p>
            <p class="text-gray-700 text-base ">Time : {bookingPeriodString}</p>
          </div>
          {type === 'later' && (
            <button
              type="button"
              className="text-white bg-red-400  hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3"
              onClick={handleClick}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBookingCard;
