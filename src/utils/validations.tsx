const validations = {
  firstName: {
    required: 'This field is required',
  },
  lastName: {
    required: 'This field is required',
  },
  email: {
    required: 'This field is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },
  queryType: {
    required: 'Please select a query type',
  },
  message: {
    required: 'This field is required',
  },
  consentToContact: {
    required: 'To submit this form, please consent to being contacted',
  },
};

export default validations;
