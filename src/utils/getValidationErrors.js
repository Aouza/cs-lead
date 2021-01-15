export const getValidationErrors = (err) => {
  const validationErrors = {};

  // eslint-disable-next-line array-callback-return
  err?.inner?.map((error) => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
};
