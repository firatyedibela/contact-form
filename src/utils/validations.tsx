const validations = {
  firstName: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
  lastName: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
  email: {
    required: {
      value: true,
      message: 'This field is required',
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },
  queryType: {
    required: {
      value: true,
      message: 'Please select a query type',
    },
  },
  message: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
  consentToContact: {
    required: {
      value: true,
      message: 'To submit this form, please consent to being contacted',
    },
  },
};

export default validations;
