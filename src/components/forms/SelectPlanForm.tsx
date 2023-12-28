import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import Arcade from "../icons/Arcade";
import Advanced from "../icons/Advanced";
import Pro from "../icons/Pro";

type PlanProps = {
  isMonthly: boolean;
  plan: { id: string; price: number };
};

type SelectPlanFormProps = PlanProps & {
  updateFormData: (field: Partial<PlanProps>) => void;
};

function SelectPlanForm({
  isMonthly,
  plan,
  updateFormData,
}: SelectPlanFormProps) {
  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({
      plan: { id: name, price: parseInt(value) },
    });
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    updateFormData({
      isMonthly: !isMonthly,
    });
  };
  return (
    <FormWrapper
      formId="multi-step-form"
      title="Select Your Plan"
      subtitle="You have the option of monthly or yearly billing"
    >
      <div className="flex h-full w-full flex-col">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <label
            htmlFor="arcade"
            className="flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue has-[:checked]:bg-light-gray/20 has-[:focus-visible]:ring-4 has-[:checked]:ring-purplish-blue
              has-[:focus-visible]:ring-purplish-blue md:flex-col md:items-start md:gap-10"
          >
            <input
              id="arcade"
              className="sr-only"
              type="radio"
              name="arcade"
              value={9}
              checked={plan.id === "arcade"}
              onChange={handlePlanChange}
            />
            <Arcade />
            <span className="flex flex-col font-ubuntuMedium text-lg">
              Arcade
              <span className="font-ubuntuRegular text-base text-cool-gray">
                $9/mo
              </span>
            </span>
          </label>
          <label
            htmlFor="advanced"
            className="flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue has-[:checked]:bg-light-gray/20 has-[:focus-visible]:ring-4 has-[:checked]:ring-purplish-blue
              has-[:focus-visible]:ring-purplish-blue md:flex-col md:items-start md:gap-10"
          >
            <input
              id="advanced"
              className="peer sr-only"
              type="radio"
              name="advanced"
              value={12}
              checked={plan.id === "advanced"}
              onChange={handlePlanChange}
            />
            <Advanced />
            <span className="flex flex-col font-ubuntuMedium text-lg">
              Advanced
              <span className="font-ubuntuRegular text-base text-cool-gray">
                $9/mo
              </span>
            </span>
          </label>
          <label
            htmlFor="pro"
            className="flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue has-[:checked]:bg-light-gray/20 has-[:focus-visible]:ring-4 has-[:checked]:ring-purplish-blue
              has-[:focus-visible]:ring-purplish-blue md:flex-col md:items-start md:gap-10"
          >
            <input
              id="pro"
              className="sr-only"
              type="radio"
              name="pro"
              value={15}
              checked={plan.id === "pro"}
              onChange={handlePlanChange}
            />
            <Pro />
            <span className="flex flex-col font-ubuntuMedium text-lg">
              Pro
              <span className="font-ubuntuRegular text-base text-cool-gray">
                $9/mo
              </span>
            </span>
          </label>
        </div>
        <div className="flex justify-center rounded-lg bg-lighter-blue p-3">
          <label className="relative inline-flex cursor-pointer items-center gap-4">
            <span
              className={`text-sm font-medium  ${
                isMonthly ? "text-marine-blue" : "text-cool-gray"
              }`}
            >
              Monthly
            </span>
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={handleBillingChange}
              checked={isMonthly}
            />
            <div className="peer relative h-6 w-11 rounded-full bg-marine-blue after:absolute after:end-[4px] after:top-1 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:-translate-x-[120%] peer-focus-visible:ring-4 peer-focus-visible:ring-purplish-blue ltr:peer-checked:after:translate-x-full"></div>
            <span
              className={`text-sm font-medium  ${
                isMonthly ? "text-cool-gray" : "text-marine-blue"
              }`}
            >
              Yearly
            </span>
          </label>
        </div>
      </div>
    </FormWrapper>
  );
}

export default SelectPlanForm;
