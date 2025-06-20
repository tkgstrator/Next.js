import type { Control, FieldError, FieldValues, Path } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import type React from 'react'
import { Input } from '@/components/ui/input'

type InputProps<T extends FieldValues> = React.ComponentProps<'input'> & {
  label?: string
  description?: string
  name: Path<T>
  control: Control<T>
  error?: FieldError
}

function FormInput<T extends FieldValues>({
  className,
  type,
  control,
  name,
  label,
  placeholder,
  disabled,
  error,
  required,
  description,
  ...props
}: InputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input required={required} disabled={disabled} placeholder={placeholder} {...field} {...props} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export { FormInput }
