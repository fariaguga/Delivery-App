export const validateName = (nome) => {
  const minLength = 12;
  if (nome.length >= minLength) {
    return true;
  }
  return false;
};

export const validateEmail = (email) => {
  const emailFormat = /\S+@\S+\.\S+/;
  const isValid = emailFormat.test(email);
  if (isValid) {
    return true;
  }
  return false;
};

export const validatePassword = (password) => {
  const minLength = 6;
  if (password.length >= minLength) {
    return true;
  }
  return false;
};
