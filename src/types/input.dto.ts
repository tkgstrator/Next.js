import { z } from 'zod'

export const InputStringTestSchema = z.object({
  string: z.string({ required_error: 'String is required' }),
  string_optional: z.string().optional(),
  string_nullable: z.string().nullable(),
  string_nullish: z.string().nullish(),
  string_nonempty: z.string().nonempty(),
  string_nonempty_optional: z.string().nonempty().optional(),
  string_nonempty_nullable: z.string().nonempty().nullable(),
  string_nonempty_nullish: z.string().nonempty().nullish()
})
export type InputStringTest = z.infer<typeof InputStringTestSchema>

export const InputNumberTestSchema = z.object({
  number: z.number(),
  number_optional: z.number().optional(),
  number_nullable: z.number().nullable(),
  number_nullish: z.number().nullish(),
  number_positive: z.number().positive(),
  number_negative: z.number().negative(),
  number_int: z.number().int(),
  number_finite: z.number().finite()
})
export type InputNumberTest = z.infer<typeof InputNumberTestSchema>

export const InputArrayTestSchema = z.object({
  array: z.array(z.string()),
  array_optional: z.array(z.string()).optional(),
  array_nullable: z.array(z.string()).nullable(),
  array_nullish: z.array(z.string()).nullish(),
  array_nonempty: z.array(z.string()).nonempty(),
  array_nonempty_optional: z.array(z.string()).nonempty().optional(),
  array_nonempty_nullable: z.array(z.string()).nonempty().nullable(),
  array_nonempty_nullish: z.array(z.string()).nonempty().nullish()
})
export type InputArrayTest = z.infer<typeof InputArrayTestSchema>

export const InputTestSchema = z.object({
  string: InputStringTestSchema,
  number: InputNumberTestSchema,
  array: InputArrayTestSchema
})
export type InputTest = z.infer<typeof InputTestSchema>
