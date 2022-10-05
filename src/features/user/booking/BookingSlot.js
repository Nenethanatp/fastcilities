import React from 'react';

function BookingSlot() {
  const slots = [
    '09:00-09:30',
    '09:30-10:00',
    '10:00-10:30',
    '10:30-11:00',
    '11:00-11:30',
    '11:30-12:00',
    '12:00-12:30',
    '12:30-13:00',
    '13:00-13:30',
    '13:30-14:00',
    '14:00-14:30',
    '14:30-15:00',
    '15:00-15:30',
    '15:30-16:00',
    '16:00-16:30',
    '16:30-17:00',
    '17:00-17:30',
    '17:30-18:00',
    '18:00-18:30',
    '18:30-19:00',
    '19.00-19:30',
    '19:30-20:00',
    '20:00-20:30',
    '20:30-21:00',
  ];
  return (
    <>
      <div className="flex flex-col">
        {slots.map((slot, index) => {
          return (
            <>
              <div
                className={` text-gray-700 bg-white border-gray-300  border font-medium rounded-lg text-sm px-5 py-3 text-center w-64 h-12 m-3`}
              >
                {slot}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BookingSlot;