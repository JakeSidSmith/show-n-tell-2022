import {
  FieldAny,
  FieldCheckbox,
  FieldNumber,
  FieldSelect,
  FieldText,
  Schema,
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

// export type InferFormInterface<S extends Schema> =
//   S extends readonly (infer F)[]
//     ? {
//         [FN in F extends FieldAny<infer N> ? N : never]: InferFieldValue<F, FN>;
//       }
//     : never;

export type InferFormInterface<S extends Schema> =
  S extends readonly (infer F)[]
    ? Expand<
        {
          [FN in F extends FieldAny<infer N> & { required: true }
            ? N
            : never]: InferFieldValue<F, FN>;
        } & {
          [Field in F extends FieldAny<infer N>
            ? F extends { required: true }
              ? never
              : N
            : never]?: InferFieldValue<F, Field>;
        }
      >
    : never;
