import { FormProvider, useForm } from 'react-hook-form';
import { TextInput } from './TextInput';
import { RadioGroup } from './RadioGroup';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import validations from '../utils/validations';
import { ClipLoader } from 'react-spinners';
import { Toast } from './Toast';

export type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consentToContact: boolean;
};

export const ContactForm = () => {
  const methods = useForm<FormFields>();

  const onSubmit = async (data: FormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form className="bg-white p-6 rounded-2xl w-full mx-auto max-w-[690px] md:p-10 md:mt-16 lg:max-w-[736px] text-grey-900 ">
        <h2 className="mb-8 font-bold text-[32px] tracking-[-1px] leading-[100%]">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            id="firstname"
            name="firstName"
            type="text"
            autoComplete="given-name"
            label="first name"
            validationRules={validations.firstName}
          />
          <TextInput
            id="lastname"
            name="lastName"
            type="text"
            autoComplete="family-name"
            label="last name"
            validationRules={validations.lastName}
          />
          <TextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            label="email address"
            validationRules={validations.email}
            className="md:col-span-2"
          />
          <RadioGroup
            name="queryType"
            legend="query type"
            options={['general enquiry', 'support request']}
            className="md:col-span-2"
            validationRules={validations.queryType}
          />
          <TextInput
            id="message"
            name="message"
            label="message"
            multiline
            className="md:col-span-2"
            validationRules={validations.message}
          />
        </div>
        <Checkbox
          name="consentToContact"
          label="I consent to being contacted by the team"
          className="mt-10"
          validationRules={validations.consentToContact}
        />
        <Button onClick={methods.handleSubmit(onSubmit)} className="mt-10">
          {methods.formState.isSubmitting ? (
            <ClipLoader size="27px" color="#ffffff" speedMultiplier={0.7} />
          ) : (
            'Submit'
          )}
        </Button>
        <Toast />
      </form>
    </FormProvider>
  );
};
