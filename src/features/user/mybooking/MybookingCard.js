import dateFormat from 'dateformat';
import { useModal } from '../../../contexts/ModalContext';
import CancelCard from './CancelCard';
function MyBookingCard({
  bookingDate,
  facility,
  bookingPeriod,
  bookingId,
  type,
  tmr,
}) {
  const { name, location, image } = facility;
  // console.log(facility);
  // console.log(type);
  const { openFormModal } = useModal();
  const bookingDateNewFormat = dateFormat(bookingDate, 'ddd, dd mmm yy');

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
    <div className="w-full bg-gray-200">
      <div className="flex justify-center flex-col items-center gap-4 w-full">
        <div
          className={`flex flex-row  rounded-lg bg-white shadow-lg w-7/12 justify-between items-center mb-3 p-5 ${cardStyle}`}
        >
          <div className="flex items-center gap-5 ">
            <img
              className="w-60 h-36 object-cover  rounded-lg"
              src={image}
              alt=""
            />
            <div className=" flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium ">{name}</h5>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {location}
              </h5>
              <p className="text-gray-700 text-base ">
                Date : {bookingDateNewFormat}
              </p>
              <p className="text-gray-700 text-base ">
                Time : {bookingPeriodString}
              </p>
            </div>
          </div>
          {type === 'later' && tmr !== bookingDate && (
            <button
              type="button"
              className="text-white bg-red-400  hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3"
              onClick={() =>
                openFormModal({
                  header: 'Do you want to cancel booking ?',
                  body: (
                    <CancelCard
                      bookinDateNewFormat={bookingDateNewFormat}
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
