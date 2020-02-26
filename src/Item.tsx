import * as React from "react";
import { Field, ErrorMessage } from "formik";

import { ItemField } from "./typings";

const Item: React.FunctionComponent<ItemField> = ({
  name,
  required,
  label,
  component,
  options,
  placeholder,
  type,
  object,
  className
}) => {
  return (
    <div className="schematiq__itemWrapper">
      <label htmlFor={name}>
        {label} {required && "*"}
      </label>
      <Field
        className={`schematiq__item ${className || ""}`}
        key={name}
        component={component || "input"}
        options={options}
        // name={repeater ? `${repeater}.${index}.${name}` : name}
        name={name}
        type={type}
        hasFeedback
        placeholder={placeholder}
      >
        {options &&
          options.map(option => (
            <option value={option.value || option}>
              {option.label || option}
            </option>
          ))}
      </Field>
      <span className="schematiq__error">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default Item;
