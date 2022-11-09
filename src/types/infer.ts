import {
  FieldAny,
  FieldCheckbox,
  FieldNumber,
  FieldSelect,
  FieldText,
} from './fields';

export type Expand<T extends Record<string, any>> = {
  [P in keyof T]: T[P];
};

export type InferFieldValue<F, N extends string> = F extends FieldText<N>
  ? string
  : F extends FieldNumber<N>
  ? number
  : F extends FieldCheckbox<N>
  ? boolean
  : F extends FieldSelect<N>
  ? F['options'][number]
  : never;

/* Without optional fields (all values required by default) */

// export type InferFormInterface<T extends readonly FieldAny<string>[]> =
//   T extends readonly (infer AllFields)[]
//     ? {
//         [Field in AllFields extends FieldAny<infer N>
//           ? N
//           : never]: InferFieldValue<AllFields, Field>;
//       }
//     : never;

export type InferFormInterface<T extends readonly FieldAny<string>[]> =
  T extends readonly (infer AllFields)[]
    ? Expand<
        {
          [Field in AllFields extends FieldAny<infer N> & { required: true }
            ? N
            : never]: InferFieldValue<AllFields, Field>;
        } & {
          [Field in AllFields extends FieldAny<infer N>
            ? AllFields extends { required: true }
              ? never
              : N
            : never]?: InferFieldValue<AllFields, Field>;
        }
      >
    : never;
