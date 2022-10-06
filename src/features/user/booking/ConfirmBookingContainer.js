import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBooking } from '../../../api/bookApi';
import { useUserContext } from '../../../contexts/UserContext';
import ConfirmCard from './ConfirmCard';

function ConfirmBookingContainer() {
  const { selectedFac, bookingDate, selectedTimeSlots } = useUserContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await createBooking(selectedFac.id, bookingDate, selectedTimeSlots);
      toast.success('Booking Success');
      navigate('/my_booking');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">Booking Confirmation</div>

        <ConfirmCard />
        <div>* You can cancel schedule 1 day before appointment </div>
        <div className="flex justify-end">
          <div className="flex justify-center">
            <button
              type="button"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={handleClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmBookingContainer;
