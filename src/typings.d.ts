import { FormikValues, FormikHelpers } from "formik";

export interface ItemField {
  name: string;
  required?: boolean;
  label: string;
  component?: string;
  options?: FieldOptions[];
  placeholder?: string;
  type?: string;
  object?: Object;
  className?: string;
}

interface FieldOptions {
  label?: string;
  value?: any;
}

export interface SchematiqComponent {
  formTitle?: string;
  handleSubmit: (
    values: Object,
    actions: FormikHelpers<T>
  ) => void | Promise<any>;
  initialValues?: Object;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  fields: Array<ItemField>;
  submitLabel?: string;
  validationSchema?: Object;
}
