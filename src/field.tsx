import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FieldAny, FieldType, Schema } from './types/fields';
import { InferFieldValue, InferFormInterface } from './types/infer';

interface FieldProps<
  S extends Schema,
  Field extends FieldAny<N>,
  N extends string
> {
  field: Field;
  value: InferFieldValue<Field, N> | undefined;
  setValues: Dispatch<SetStateAction<Partial<InferFormInterface<S>>>>;
}

export const Field = <
  S extends Schema,
  Field extends FieldAny<N>,
  N extends string
>({
  field,
  value,
  setValues,
}: FieldProps<S, Field, N>) => {
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (field.type === FieldType.NUMBER) {
      const value = parseFloat(event.target.value);

      if (Number.isFinite(value)) {
        setValues((prev) => ({
          ...prev,
          [field.name]: value,
        }));
      }
    } else if (field.type === FieldType.CHECKBOX) {
      setValues((prev) => ({
        ...prev,
        [field.name]: !prev[field.name],
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [field.name]: event.target.value || undefined,
      }));
    }
  };

  if (field.type === FieldType.CHECKBOX) {
    return (
      <input
        type="checkbox"
        id={field.name}
        onChange={onChange}
        checked={!!value}
      />
    );
  }

  if (field.type === FieldType.NUMBER) {
    return (
      <input
        type="number"
        id={field.name}
        onChange={onChange}
        value={value?.toString() ?? ''}
      />
    );
  }

  if (field.type === FieldType.SELECT) {
    return (
      <select
        id={field.name}
        onChange={onChange}
        value={value?.toString() ?? ''}
      >
        <option value=""></option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type="text"
      id={field.name}
      onChange={onChange}
      value={value?.toString() ?? ''}
    />
  );
};
