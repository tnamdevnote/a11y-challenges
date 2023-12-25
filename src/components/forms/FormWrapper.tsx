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
        <h2 className="text-heading text-marine-blue font-ubuntuBold">
          Personal Info
        </h2>
        <p className="text-cool-gray font-ubuntuRegular text-lg">
          Please provide your name, email address, and phone number
        </p>
      </legend>
      <div className="flex flex-col gap-4 mt-4">{children}</div>
    </fieldset>
  );
}

export default FormWrapper;
