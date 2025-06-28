import { FormProvider, useForm } from 'react-hook-form';
import { TextInput } from './TextInput';
import { RadioGroup } from './RadioGroup';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import validations from '../utils/validations';

type FormFields = {
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
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form className="bg-white p-6 rounded-2xl w-full max-w-[690px] lg:max-w-[736px] text-grey-900">
        <h2 className="mb-8 font-bold text-[32px] tracking-[-1px]">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            type="text"
            label="first name"
            name="firstName"
            id="firstname"
            validation={validations.firstName}
            required
          />
          <TextInput
            type="text"
            label="last name"
            name="lastName"
            id="lastname"
            validation={validations.lastName}
            required
          />
          <TextInput
            type="email"
            label="email address"
            name="email"
            id="email"
            validation={validations.email}
            required
            className="md:col-span-2"
          />
          <RadioGroup
            legend="query type"
            name="queryType"
            options={['general enquiry', 'support request']}
            validation={validations.queryType}
            required
            className="md:col-span-2"
          />
          <TextInput
            multiline
            label="message"
            name="message"
            id="message"
            validation={validations.message}
            required
            className="md:col-span-2"
          />
        </div>
        <Checkbox
          label="I consent to being contacted by the team"
          name="consentToContact"
          validation={validations.consentToContact}
          required
          className="mt-10"
        />
        <Button onClick={methods.handleSubmit(onSubmit)} className="mt-10">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
