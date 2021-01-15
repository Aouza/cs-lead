export const getValidationErrors = (err) => {
  const validationErrors = {};

  err?.inner?.map((error) => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
};
