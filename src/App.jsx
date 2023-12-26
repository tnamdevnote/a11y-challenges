import useMultiStepForm from "./hooks/useMultiStepForm";
import YourInfoForm from "./components/forms/YourInfoForm";
import SelectPlanForm from "./components/forms/SelectPlanForm";
import AddOnsForm from "./components/forms/AddOnsForm";
import SummaryForm from "./components/forms/SummaryForm";
import { useState } from "react";

const FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  monthlyPlan: [
    {
      id: "arcade-month",
      label: "Arcade",
      price: 9,
    },
    {
      id: "advanced-month",
      label: "Advanced",
      price: 12,
    },
    {
      id: "pro-month",
      label: "Pro",
      price: 15,
    },
  ],
  yearlyPlan: [
    {
      id: "arcade-year",
      label: "Arcade",
      price: 90,
    },
    {
      id: "advanced-year",
      label: "Advanced",
      price: 120,
    },
    {
      id: "pro-year",
      label: "Pro",
      price: 150,
    },
  ],
  addOns: [
    {
      id: "online-service",
      label: "Online service",
    },
  ],
};

function App() {
  const [formData, setFormData] = useState(FORM_DATA);
  const { steps, currentStepIndex, currentStep, isStart, isLast, next, back } =
    useMultiStepForm([
      <YourInfoForm data={formData} />,
      <SelectPlanForm data={formData} />,
      <AddOnsForm data={formData} />,
      <SummaryForm data={formData} />,
    ]);

  return (
    <main className="relative flex min-h-screen items-start bg-lighter-blue md:items-center">
      <header className="fixed top-0 flex h-[172px] w-full justify-center bg-bg-sidebar-mobile bg-cover md:hidden"></header>
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-6 md:hidden">
        {steps.map((_, i) => (
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-white ring-1 ring-white">
            {i + 1}
          </span>
        ))}
      </div>
      <section className="mx-8 my-[99px] min-h-96 w-full max-w-[940px] rounded-xl bg-white drop-shadow-xl md:flex lg:mx-auto">
        <div className="md:bg-bg-sidebar-desktop m-4 mr-0 hidden h-[568px] w-[274px] flex-shrink-0 md:block"></div>
        <form
          id="multi-step_form"
          className="p-8 md:flex md:w-full md:flex-col md:justify-between md:px-20 md:pt-16"
        >
          {currentStep}
          <div className="hidden md:flex md:justify-end">
            {!isStart && (
              <button
                className="mr-auto"
                type="button"
                form="multi-step_form"
                onClick={back}
              >
                Go Back
              </button>
            )}
            {isLast ? (
              <button type="button" form="multi-step_form" onClick={next}>
                Confirm
              </button>
            ) : (
              <button type="button" form="multi-step_form" onClick={next}>
                Next Step
              </button>
            )}
          </div>
        </form>
      </section>
      <footer className="fixed bottom-0 flex h-[72px] w-full items-center justify-end bg-white md:hidden">
        {!isStart && (
          <button
            className="mr-auto"
            type="button"
            form="multi-step_form"
            onClick={back}
          >
            Go Back
          </button>
        )}
        {isLast ? (
          <button type="button" form="multi-step_form" onClick={next}>
            Confirm
          </button>
        ) : (
          <button type="button" form="multi-step_form" onClick={next}>
            Next Step
          </button>
        )}
      </footer>
    </main>
  );
}

export default App;
