import React from "react";
import { Field } from "redux-form";

// components
import { Rating } from "components";

export default () => {
  return (
    <Field
      name="rating"
      parse={value => Number(value)}
      type="number"
      component={Rating}
    />
  );
};
