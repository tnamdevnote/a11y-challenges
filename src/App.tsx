import useMultiStepForm from "./hooks/useMultiStepForm";
import YourInfoForm from "./components/forms/YourInfoForm";
import SelectPlanForm from "./components/forms/SelectPlanForm";
import AddOnsForm from "./components/forms/AddOnsForm";
import SummaryForm from "./components/forms/SummaryForm";
import { useState } from "react";
import React from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  isMonthly: boolean;
  plan: { id: string; price: number };
  addOns?: { id: string; label: string; price: number }[];
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  isMonthly: true,
  plan: { id: "arcade", price: 9 },
};

function App() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const updateFormData = (fields: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, currentStep, isStart, isLast, next, back } =
    useMultiStepForm([
      <YourInfoForm {...formData} updateFormData={updateFormData} />,
      <SelectPlanForm {...formData} updateFormData={updateFormData} />,
      <AddOnsForm {...formData} updateFormData={updateFormData} />,
      <SummaryForm />,
    ]);
  console.log(formData);
  return (
    <main className="relative flex min-h-screen items-start bg-lighter-blue md:items-center">
      <header className="fixed top-0 flex h-[172px] w-full justify-center bg-bg-sidebar-mobile bg-cover md:hidden"></header>
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-6 md:hidden">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-8 w-8 rounded-full p-0 ${
              currentStepIndex === i
                ? "bg-light-blue text-marine-blue ring-0"
                : "text-white ring-1 ring-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <section className="mx-4 my-[99px] min-h-96 w-full max-w-[940px] rounded-xl bg-white drop-shadow-xl md:flex lg:mx-auto">
        <div className="m-4 mr-0 hidden h-[568px] w-[274px] flex-shrink-0 md:flex md:flex-col md:bg-bg-sidebar-desktop">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`h-8 w-8 rounded-full p-0 ${
                currentStepIndex === i
                  ? "bg-light-blue text-marine-blue ring-0"
                  : "text-white ring-1 ring-white"
              }`}
            >
              {i + 1}
              <span></span>
            </button>
          ))}
        </div>
        <form
          id="multi-step_form"
          className="px-6 py-8 md:flex md:w-full md:flex-col md:justify-between md:px-16 md:pt-16"
        >
          {currentStep}
          <div className="hidden md:flex md:justify-end">
            {!isStart && (
              <button
                className="btn-no-fill mr-auto rounded-md text-lg"
                type="button"
                form="multi-step_form"
                onClick={back}
              >
                Go Back
              </button>
            )}
            {isLast ? (
              <button
                className="btn-secondary rounded-md px-6 text-lg"
                type="button"
                onClick={next}
              >
                Confirm
              </button>
            ) : (
              <button
                className="btn-primary rounded-md px-6 text-lg"
                type="button"
                onClick={next}
              >
                Next Step
              </button>
            )}
          </div>
        </form>
      </section>
      <footer className="fixed bottom-0 flex h-[72px] w-full items-center justify-end bg-white p-8 md:hidden">
        {!isStart && (
          <button
            className="btn-no-fill mr-auto rounded-sm text-base"
            type="button"
            form="multi-step_form"
            onClick={back}
          >
            Go Back
          </button>
        )}
        {isLast ? (
          <button
            className="btn-secondary rounded-sm px-4 text-base"
            type="button"
            form="multi-step_form"
            onClick={next}
          >
            Confirm
          </button>
        ) : (
          <button
            className="btn-primary rounded-sm px-4 text-base"
            type="button"
            form="multi-step_form"
            onClick={next}
          >
            Next Step
          </button>
        )}
      </footer>
    </main>
  );
}

export default App;
