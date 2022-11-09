import React, { FormEvent, Fragment, useState } from 'react';
import { Field } from './field';
import { FieldAny } from './types/fields';
import { InferFormInterface } from './types/infer';
import { ValidateFunction, validate } from './validate';

interface FormProps<Schema extends readonly FieldAny<string>[]> {
  schema: Schema;
  initialValues?: Partial<InferFormInterface<Schema>>;
}

export const Form = <Schema extends readonly FieldAny<string>[]>({
  schema,
  initialValues = {},
}: FormProps<Schema>) => {
  const [values, setValues] =
    useState<Partial<InferFormInterface<Schema>>>(initialValues);

  const validateFormValues: ValidateFunction<Schema> = validate;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      validateFormValues(schema, values);
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : error}`);
      return;
    }

    alert(`Result: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <form onSubmit={onSubmit}>
      {schema.map((field) => (
        <Fragment key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <Field
            field={field}
            value={values[field.name]}
            setValues={setValues}
          />
        </Fragment>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
