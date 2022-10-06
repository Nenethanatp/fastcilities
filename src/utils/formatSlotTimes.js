export const formatSlot = (selectedTimeSlots) => {
  const slots = [];
  selectedTimeSlots.reduce((acc, slot, index) => {
    if (index === 0) {
      if (selectedTimeSlots.length === 1) {
        slots.push(slot);
      }
      return slot;
    } else {
      const startTime = slot.split('-')[0];
      const endTime = slot.split('-')[1];
      const startPreviousAcc = acc.split('-')[0];
      const endPreviousAcc = acc.split('-')[1];
      if (startTime === endPreviousAcc) {
        if (index === selectedTimeSlots.length - 1) {
          slots.push(`${startPreviousAcc}-${endTime}`);
        }
        return `${startPreviousAcc}-${endTime}`;
      } else {
        if (index === selectedTimeSlots.length - 1) {
          slots.push(`${startTime}-${endTime}`);
        }
        slots.push(acc);
        return slot;
      }
    }
  }, '');

  slots.sort();

  return slots;
};
