import { isEmpty, isAlpha } from 'validator';

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
    error.firstName = 'First name is invalid';
  }

  return error;
};
