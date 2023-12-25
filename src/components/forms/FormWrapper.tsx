import React from "react";

function FormWrapper({
  formId,
  children,
}: {
  formId: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset form={formId}>
      <legend>legend</legend>
      {children}
    </fieldset>
  );
}

export default FormWrapper;
