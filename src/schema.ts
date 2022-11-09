import { FieldType } from './types/fields';
import { InferFormInterface } from './types/infer';

export const MY_FORM = [
  {
    type: FieldType.TEXT,
    label: 'Name',
    name: 'name',
    required: true,
  },
  {
    type: FieldType.NUMBER,
    label: 'Age',
    name: 'age',
    required: true,
  },
  {
    type: FieldType.SELECT,
    label: 'Favorite animal',
    name: 'favoriteAnimal',
    options: [
      'Sloth',
      'Big Sloth',
      'Lil Sloth',
      "Sloth, but only if it's a baby sloth",
    ],
    required: true,
  },
  {
    type: FieldType.CHECKBOX,
    label: "Check if you're awesome",
    name: 'isAwesome',
    required: false,
  },
] as const;

export type MyFormsInterface = InferFormInterface<typeof MY_FORM>;
