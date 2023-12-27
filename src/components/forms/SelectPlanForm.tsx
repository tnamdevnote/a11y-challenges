import React, { useState } from "react";
import FormWrapper from "./FormWrapper";

type PlanProps = {
  planType: "monthly" | "yearly";
  plan: { id: string; price: number };
};

type SelectPlanFormProps = PlanProps & {
  updateFormData: (field: Partial<PlanProps>) => void;
};

function SelectPlanForm({
  planType,
  plan,
  updateFormData,
}: SelectPlanFormProps) {
  const [selected, setSelected] = useState("arcade");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelected(name);
    updateFormData({
      plan: { id: name, price: parseInt(value) },
    });
  };
  return (
    <FormWrapper
      formId="multi-step-form"
      title="Select Your Plan"
      subtitle="You have the option of monthly or yearly billing"
    >
      <div className="h-full w-full">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            id="arcade"
            type="radio"
            name="arcade"
            value={9}
            checked={selected === "arcade"}
            onChange={handleChange}
          />
          <label htmlFor="arcade">Arcade</label>
          <input
            id="advanced"
            type="radio"
            name="advanced"
            value={12}
            checked={selected === "advanced"}
            onChange={handleChange}
          />
          <label htmlFor="advanced">Advanced</label>
          <input
            id="pro"
            type="radio"
            name="pro"
            value={15}
            checked={selected === "pro"}
            onChange={handleChange}
          />
          <label htmlFor="pro">Pro</label>
        </div>
        <div className="flex justify-center rounded-lg bg-lighter-blue p-3">
          Monthly
        </div>
      </div>
    </FormWrapper>
  );
}

export default SelectPlanForm;
