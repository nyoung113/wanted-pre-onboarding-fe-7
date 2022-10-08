export const validateEmail = (email) => {
  if (email.includes('@')) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (password) => {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};
