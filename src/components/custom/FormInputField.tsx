import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import React from "react";

interface FormFieldInputProps {
  type: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  control: Control<any>;
  inputClassName: string;
  children?: React.ReactNode;
}

function FormFieldInput(props: FormFieldInputProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center gap-5">
            <FormLabel className="flex items-center gap-1">
              <span>{props.label}</span>
              {props.required && <span className="text-red-400">*</span>}
            </FormLabel>
            {props.children}
          </div>
          <FormControl>
            <Input
              type={props.type}
              placeholder={props.placeholder}
              {...field}
              className={props.inputClassName}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormFieldInput;
