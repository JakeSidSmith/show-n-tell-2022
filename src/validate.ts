import { FieldAny, FieldType } from './types/fields';
import { InferFormInterface } from './types/infer';

export type ValidateFunction<Schema extends readonly FieldAny<string>[]> = (
  schema: Schema,
  values: Partial<InferFormInterface<Schema>>
) => asserts values is InferFormInterface<Schema>;

export const validate = <Schema extends readonly FieldAny<string>[]>(
  schema: Schema,
  values: Partial<InferFormInterface<Schema>>
): asserts values is InferFormInterface<Schema> => {
  schema.forEach((field) => {
    const value = values[field.name];

    if (field.required && !value?.toString().trim()) {
      throw new Error(`Field ${field.name} is required`);
    }

    if (
      field.type === FieldType.NUMBER &&
      !Number.isFinite(parseFloat(value?.toString() ?? ''))
    ) {
      throw new Error(`Field ${field.name} must be a number`);
    }
  });
};
