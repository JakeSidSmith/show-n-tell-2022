import React, { FormEvent, Fragment, useState } from 'react';
import { Field } from './field';
import { FieldAny } from './types/fields';
import { InferFormInterface } from './types/infer';

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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
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
