import React from "react";

function FormWrapper({
  formId,
  title,
  subtitle,
  children,
}: {
  formId: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset form={formId}>
      <legend>
        <h2 className="font-ubuntuBold text-2xl text-marine-blue md:text-heading">
          {title}
        </h2>
        <p className="font-ubuntuRegular text-lg text-cool-gray">{subtitle}</p>
      </legend>
      <div className="mt-8 flex flex-col gap-4">{children}</div>
    </fieldset>
  );
}

export default FormWrapper;
