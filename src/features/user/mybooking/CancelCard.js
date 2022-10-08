import React from 'react';
import { toast } from 'react-toastify';
import { deleteMyBooking } from '../../../api/myBookingApi';
import { useModal } from '../../../contexts/ModalContext';
import { useUserContext } from '../../../contexts/UserContext';

function CancelCard({
  bookinDateNewFormat,
  facility,
  bookingPeriodString,
  bookingId,
}) {
  const { name, location } = facility;
  const { closeFormModal } = useModal();
  const { myBookings, setMyBookings } = useUserContext();
  const handleSubmit = async () => {
    try {
      await deleteMyBooking(bookingId);
      toast.success('Delete success');
      closeFormModal();
      setMyBookings(
        myBookings.filter((booking) => {
          return booking.id !== bookingId;
        })
      );
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <hr />
      <div className="mt-5 text-gray-700 text-base  text-center">
        <div className="text-lg ">{name}</div>
        <div className="text-lg  mb-4">{location}</div>

        <div>Date : {bookinDateNewFormat}</div>
        <div>Time : {bookingPeriodString}</div>

        <button
          type="button"
          className={`text-white bg-red-400  hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center  h-12 m-3 mt-7 w-44`}
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </>
  );
}

export default CancelCard;
