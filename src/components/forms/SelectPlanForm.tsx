import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import Arcade from "../icons/arcade";
import Advanced from "../icons/advanced";
import Pro from "../icons/pro";

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
      <div className="flex h-full w-full flex-col">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <label
            htmlFor="arcade"
            className={`flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue md:flex-col md:items-start md:gap-10 ${
              selected === "arcade" ? "bg-light-gray/20 ring-purplish-blue" : ""
            }`}
          >
            <input
              id="arcade"
              className="sr-only"
              type="radio"
              name="arcade"
              value={9}
              checked={selected === "arcade"}
              onChange={handleChange}
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
            className={`flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue md:flex-col md:items-start md:gap-10 ${
              selected === "advanced"
                ? "bg-light-gray/20 ring-purplish-blue"
                : ""
            }`}
          >
            <input
              id="advanced"
              className="sr-only"
              type="radio"
              name="advanced"
              value={12}
              checked={selected === "advanced"}
              onChange={handleChange}
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
            className={`flex flex-1 items-center gap-4 rounded-lg p-4 ring-1 ring-light-gray transition-colors hover:cursor-pointer hover:ring-purplish-blue md:flex-col md:items-start md:gap-10 ${
              selected === "pro" ? "bg-light-gray/20 ring-purplish-blue" : ""
            }`}
          >
            <input
              id="pro"
              className="sr-only"
              type="radio"
              name="pro"
              value={15}
              checked={selected === "pro"}
              onChange={handleChange}
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
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Checked toggle
            </span>
          </label>
        </div>
      </div>
    </FormWrapper>
  );
}

export default SelectPlanForm;
