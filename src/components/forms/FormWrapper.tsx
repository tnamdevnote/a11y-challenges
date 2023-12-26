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
      <legend>
        <h2 className="font-ubuntuBold text-heading text-marine-blue">
          Personal Info
        </h2>
        <p className="font-ubuntuRegular text-lg text-cool-gray">
          Please provide your name, email address, and phone number
        </p>
      </legend>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </fieldset>
  );
}

export default FormWrapper;
