"use client";

import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes, RefObject } from "react";
import { useId } from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, FormProvider } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FormFieldContext, FormItemContext, useFormField } from "./form.hook";

const Form = FormProvider;

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext>
  );
}

function FormItem({
  ref,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  ref: RefObject<HTMLDivElement>;
}) {
  const id = useId();

  return (
    <FormItemContext value={{ id }}>
      <div className={cn("space-y-2", className)} ref={ref} {...props} />
    </FormItemContext>
  );
}
FormItem.displayName = "FormItem";

function FormLabel({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> & {
  ref: RefObject<ElementRef<typeof LabelPrimitiveRoot>>;
}) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      ref={ref}
      {...props}
    />
  );
}
FormLabel.displayName = "FormLabel";

function FormControl({
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof Slot> & {
  ref: RefObject<ElementRef<typeof Slot>>;
}) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
      {...props}
    />
  );
}
FormControl.displayName = "FormControl";

function FormDescription({
  ref,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  ref: RefObject<HTMLParagraphElement>;
}) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      id={formDescriptionId}
      ref={ref}
      {...props}
    />
  );
}
FormDescription.displayName = "FormDescription";

function FormMessage({
  ref,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  ref: RefObject<HTMLParagraphElement>;
}) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  const isVisible = Boolean(body) && !error;

  if (!isVisible) {
    return null;
  }

  return (
    <p
      className={cn("font-medium text-[0.8rem] text-destructive", className)}
      id={formMessageId}
      ref={ref}
      {...props}
    >
      {body}
    </p>
  );
}
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
};
