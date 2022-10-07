import { isEmpty, isAlpha, isEmail, isMobilePhone } from 'validator';
import { toast } from 'react-toastify';

export const validateUser = (input) => {
  const error = {};
  const {
    studentId,
    password,
    confirmPassword,
    firstName,
    lastName,
    email,
    phone,
    faculty,
    image,
  } = input;

  if (isEmpty(firstName) || !isAlpha(firstName)) {
    return toast.error('First name is invalid');
  }
  if (email) {
    if (!isEmail(email)) {
      return toast.error('Invalid email format');
    }
  }
  if (phone) {
    if (!isMobilePhone(phone, 'th-TH')) {
      return toast.error('Invalid phone format');
    }
  }

  return error;
};
