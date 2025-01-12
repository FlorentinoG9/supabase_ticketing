import * as React from 'react'
import { type FieldPath, type FieldValues, useFormContext } from 'react-hook-form'

interface FormItemContextValue {
  id: string
}

interface FormFieldContextValue< TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const hasField = Boolean(fieldContext)
  const hasItem = Boolean(itemContext)

  if (!hasField) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!hasItem) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const { id } = itemContext
  const fieldState = getFieldState(fieldContext.name, formState)

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

export { FormFieldContext, type FormFieldContextValue, FormItemContext, type FormItemContextValue, useFormField }
