import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBooking } from '../../../api/bookApi';
import { useLoadingContext } from '../../../contexts/LoadingContext';
import { useUserContext } from '../../../contexts/UserContext';
import ConfirmCard from './ConfirmCard';

function ConfirmBookingContainer() {
  const { selectedFac, bookingDate, selectedTimeSlots } = useUserContext();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoadingContext();

  const handleClick = async () => {
    try {
      startLoading();
      await createBooking(selectedFac.id, bookingDate, selectedTimeSlots);
      toast.success('Booking Success');
      navigate('/my_booking');
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" mt-12 w-7/12 mb-5 text-2xl">Booking Confirmation</div>

        <ConfirmCard />
        <div className="flex w-7/12 justify-between">
          <div>* You can cancel schedule 1 day before booking date </div>
          <button
            type="button"
            className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm  py-2.5 text-center w-[10rem]  h-12 `}
            onClick={handleClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmBookingContainer;
