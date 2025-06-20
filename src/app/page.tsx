'use client'
import { FormInput } from '@/components/form/input'
import { type InputTest, InputTestSchema } from '@/types/input.dto'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export default function Page() {
  const form = useForm<InputTest>({
    resolver: zodResolver(InputTestSchema),
    defaultValues: {}
  })
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = form
  const handleClick = async () => {
    await handleSubmit((data) => {
      console.log('data', data)
    })()
    console.log('values', getValues())
    console.error('errors', errors)
  }
  return (
    <>
      <div>
        <Form {...form}>
          <FormInput label='string' name='string.string' control={control} />
          <FormInput label='string,optional' name='string.string_optional' control={control} />
          <FormInput label='string,nullable' name='string.string_nullable' control={control} />
          <FormInput label='string,nullish' name='string.string_nullish' control={control} />
          <FormInput label='string,nonempty,' name='string.string_nonempty' control={control} />
          <FormInput label='string,nonempty,optional' name='string.string_nonempty_optional' control={control} />
          <FormInput label='string,nonempty,nullable' name='string.string_nonempty_nullable' control={control} />
          <FormInput label='string,nonempty,nullish' name='string.string_nonempty_nullish' control={control} />
        </Form>
        <Button onClick={handleClick}>検証</Button>
      </div>
    </>
  )
}
