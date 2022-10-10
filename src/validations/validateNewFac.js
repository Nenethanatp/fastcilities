import Joi from 'joi';

const newFacSchema = Joi.object({
  type: Joi.string().required().empty(''),
  name: Joi.string().required().empty(''),
  location: Joi.string().required().empty(''),
  capacity: Joi.number(),
  durationLimit: Joi.number().less(24).min(0.5).empty(''),
  openingDay: Joi.string().required().empty(''),
  openTime: Joi.string().required().empty(''),
  closeTime: Joi.string().required().empty(''),
  image: Joi.any().required().empty(''),
  status: Joi.string().required().empty(''),
});

export const validateNewFac = (input) => {
  return newFacSchema.validate(input, { abortEarly: false });
};
