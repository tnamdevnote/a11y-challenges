import React from "react";
import FormWrapper from "./FormWrapper";

type YourInfoProps = {
  name: string;
  email: string;
  phone: string;
};

type YourInfoFormProps = YourInfoProps & {
  onChange: (field: Partial<YourInfoProps>) => void;
};

function YourInfoForm({ name, email, phone, onChange }: YourInfoFormProps) {
  const handleChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange({ [field]: e.target.value });
  };
  return (
    <FormWrapper
      formId="multi-step-form"
      title="Personal info"
      subtitle="Please provide your name, email address, and phone number."
    >
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Name
        <input
          className="h-10 rounded-sm  px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="text"
          placeholder="e.g. Luke Nam"
          value={name}
          maxLength={50}
          onChange={(e) => handleChange("name", e)}
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Email Address
        <input
          className="h-10 rounded-sm px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="email"
          placeholder="e.g. lukenam@lorem.com"
          value={email}
          onChange={(e) => handleChange("email", e)}
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-marine-blue">
        Phone Number
        <input
          className="h-10 rounded-sm px-4 py-2 font-ubuntuMedium text-[15px] ring-1 ring-light-gray focus-visible:ring-purplish-blue"
          type="tel"
          placeholder="e.g. +1 616-234-5678"
          maxLength={50}
          value={phone}
          onChange={(e) => handleChange("phone", e)}
        />
      </label>
    </FormWrapper>
  );
}

export default YourInfoForm;
