import React from "react";
import FormWrapper from "./FormWrapper";

function YourInfoForm() {
  return (
    <FormWrapper
      formId="multi-step-form"
      title="Personal Info"
      subtitle="Please provide your name, email address, and phone number"
    >
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Name
        <input
          className="h-10 rounded-sm  px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="text"
          placeholder="e.g. Luke Nam"
          maxLength={50}
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Email Address
        <input
          className="h-10 rounded-sm px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="email"
          placeholder="e.g. lukenam@lorem.com"
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Phone Number
        <input
          className="h-10 rounded-sm px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="tel"
          placeholder="e.g. +1 616-234-5678"
          maxLength={50}
        />
      </label>
    </FormWrapper>
  );
}

export default YourInfoForm;
