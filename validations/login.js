export default function validateInput(data) {
  let errors = {};

  if (data.username == null) {
    errors.username = 'This field is required';
  }

  if (data.password == null) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors) == 0
  };
}
