import type { FieldErrors, FieldValues } from 'react-hook-form';

const getErrorMessage = (
  errors: FieldErrors<FieldValues>,
  fieldName: string
): string | undefined => {
  if (!errors[fieldName]) return;
  const errorMessage = errors[fieldName].message;
  return typeof errorMessage === 'string' ? errorMessage : undefined;
};

export default getErrorMessage;
