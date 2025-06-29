import type { RegisterOptions } from 'react-hook-form';
import type { FormFields } from '../components/ContactForm';

const validations: Record<keyof FormFields, RegisterOptions> = {
  firstName: {
    required: 'This field is required',
  },
  lastName: {
    required: 'This field is required',
  },
  email: {
    required: 'Please enter a valid email address',
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
