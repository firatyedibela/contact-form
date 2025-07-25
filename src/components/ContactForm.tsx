import { FormProvider, useForm } from 'react-hook-form';
import { TextInput } from './TextInput';
import { RadioGroup } from './RadioGroup';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import validations from '../utils/validations';
import { ClipLoader } from 'react-spinners';
import { Toast } from './Toast';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSuccess = async () => {
    if (isSuccess) return;
    // Display success toast for 3 seconds
    setIsSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsSuccess(false);
  };

  const onSubmit = async (data: FormFields) => {
    console.log('Button clicked');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    methods.reset();
    handleSuccess();
    console.log(data);
    return;
  };

  return (
    <FormProvider {...methods}>
      <form className="bg-white p-6 rounded-2xl w-full mx-auto max-w-[690px] md:p-10 md:mt-16 lg:max-w-[736px] text-grey-900 ">
        <h1 className="mb-8 font-bold text-[32px] tracking-[-1px] leading-[100%]">
          Contact Us
        </h1>
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
        <Button
          onClick={methods.handleSubmit(onSubmit)}
          className="mt-10"
          disabled={isSuccess || methods.formState.isSubmitting}
        >
          {methods.formState.isSubmitting ? (
            <ClipLoader size="27px" color="#ffffff" speedMultiplier={0.7} />
          ) : (
            'Submit'
          )}
        </Button>
        <span aria-live="polite" className="sr-only">
          {methods.formState.isSubmitting && 'Submitting form'}
          {isSuccess &&
            "Thanks for completing the form. We'll be in touch soon!"}
        </span>
        <AnimatePresence mode="wait" initial={false}>
          {isSuccess && <Toast />}
        </AnimatePresence>
      </form>
    </FormProvider>
  );
};
