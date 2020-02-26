# schemak

> Generate Formik forms from schemas

[![NPM](https://img.shields.io/npm/v/schemak.svg)](https://www.npmjs.com/package/schemak) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save schematiq
```

## Future plans

- Styling
- Repeater fields

## Usage

```tsx
import * as React from "react";
import Schematiq from "schematiq";

class Example extends React.Component {
  render() {
    return (
      <Schematiq
        fields={[
          {
            name: "name",
            label: "Full Name"
          },
          {
            name: "picture",
            label: "Profile Picture",
            type: "file"
          },
          {
            name: "select",
            label: "Select",
            type: "select",
            component: "select",
            options: [1, { label: "two", value: 2 }, 3, 4, 5, 6]
          },
          {
            name: "checkbox",
            label: "Checkbox",
            type: "checkbox"
          },
          {
            name: "about",
            label: "About",
            component: "textarea"
          },
          {
            name: "openingTimes",
            label: "Opening Times",
            object: [
              {
                name: "day",
                label: "Day",
                type: "select",
                component: "select",
                options: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ]
              },
              {
                name: "time",
                label: "Time range"
              }
            ],
            buttonLabel: "Add opening time"
          }
        ]}
        initialValues={{}}
      />
    );
  }
}
```

## License

MIT © [ovidiu-balau](https://github.com/ovidiu-balau)
