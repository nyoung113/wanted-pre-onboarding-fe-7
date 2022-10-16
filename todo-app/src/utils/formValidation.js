import {
  INPUT_EMAIL_NAME,
  INPUT_EMAIL_INVALIDATE,
  INPUT_PASSWORD_NAME,
  INPUT_PASSWORD_INVALIDATE,
} from '../constant';

export const validateLoginForm = ({ name, value, errors }) => {
  if (name === INPUT_EMAIL_NAME && !value.includes('@')) {
    errors[INPUT_EMAIL_NAME] = INPUT_EMAIL_INVALIDATE;
  } else if (name === INPUT_PASSWORD_NAME && value.length < 8) {
    errors[INPUT_PASSWORD_NAME] = INPUT_PASSWORD_INVALIDATE;
  } else {
    errors[name] = '';
  }

  return errors;
};
