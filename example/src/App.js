import React, { Component } from "react";

import Schematiq from "schematiq";

export default class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
