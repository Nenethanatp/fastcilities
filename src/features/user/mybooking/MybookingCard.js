import { deleteMyBooking } from '../../../api/myBookingApi';
import dateFormat from 'dateformat';
import { useModal } from '../../../contexts/ModalContext';
import CancelCard from './CancelCard';
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
  const { openModal, openFormModal, closeFormModal } = useModal();

  const bookinDateNewFormat = dateFormat(bookingDate, 'ddd, dd mmm yy');

  const bookingPeriodString = bookingPeriod.join(', ');
  // console.log(bookingPeriodString);

  let cardStyle = '';
  if (type === 'today') {
    cardStyle = 'border-2 border-greenSky';
  }

  if (type === 'prev') {
    cardStyle = 'opacity-30';
  }
  return (
    <div className="w-full">
      <div class="flex justify-center flex-col items-center gap-4 w-full">
        <div
          class={`flex flex-row  rounded-lg bg-white shadow-lg w-7/12 justify-between items-center mb-3 p-5 ${cardStyle}`}
        >
          <div className="flex items-center gap-5">
            <img class="w-60 h-36 object-cover" src={image} alt="" />
            <div class=" flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium ">{name}</h5>
              <h5 class="text-gray-900 text-xl font-medium mb-2">{location}</h5>
              <p class="text-gray-700 text-base ">
                Date : {bookinDateNewFormat}
              </p>
              <p class="text-gray-700 text-base ">
                Time : {bookingPeriodString}
              </p>
            </div>
          </div>
          {type === 'later' && (
            <button
              type="button"
              className="text-white bg-red-400  hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3"
              onClick={() =>
                openFormModal({
                  header: 'Do you want to cancel booking ?',
                  body: (
                    <CancelCard
                      bookinDateNewFormat={bookinDateNewFormat}
                      facility={facility}
                      bookingPeriodString={bookingPeriodString}
                      bookingId={bookingId}
                      type={type}
                    />
                  ),
                })
              }
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
