export enum FieldType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
}

export interface FieldBase<N extends string> {
  name: N;
  label: string;
  required?: boolean;
}

export interface FieldText<N extends string> extends FieldBase<N> {
  type: FieldType.TEXT;
}

export interface FieldNumber<N extends string> extends FieldBase<N> {
  type: FieldType.NUMBER;
}

export interface FieldCheckbox<N extends string> extends FieldBase<N> {
  type: FieldType.CHECKBOX;
}

export interface FieldSelect<N extends string> extends FieldBase<N> {
  type: FieldType.SELECT;
  options: readonly string[];
}

export type FieldAny<N extends string> =
  | FieldText<N>
  | FieldNumber<N>
  | FieldCheckbox<N>
  | FieldSelect<N>;
