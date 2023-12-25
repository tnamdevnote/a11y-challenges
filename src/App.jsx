import useMultiStepForm from "./hooks/useMultiStepForm";
import YourInfoForm from "./components/forms/YourInfoForm";
import SelectPlanForm from "./components/forms/SelectPlanForm";
import AddOnsForm from "./components/forms/AddOnsForm";
import SummaryForm from "./components/forms/SummaryForm";
import FormWrapper from "./components/forms/FormWrapper";

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
  const { steps, currentStepIndex, currentStep, next, back } = useMultiStepForm(
    [<YourInfoForm />, <SelectPlanForm />, <AddOnsForm />, <SummaryForm />],
  );

  return (
    <main className="relative bg-lighter-blue min-h-screen flex items-start md:items-center">
      <header className="bg-bg-sidebar-mobile bg-cover fixed top-0 flex justify-center w-full h-[172px] md:hidden"></header>
      <div className="top-8 left-1/2 -translate-x-1/2 absolute flex gap-6 items-center md:hidden">
        {steps.map((_, i) => (
          <span className="items-center flex justify-center rounded-full w-8 h-8 ring-1 text-white ring-white">
            {i + 1}
          </span>
        ))}
      </div>
      <section className="rounded-xl max-w-[940px] w-full min-h-96 lg:mx-auto my-[99px] md:top-0 drop-shadow-xl mx-8 bg-white">
        <form id="multi-step_form" className="p-8">
          <FormWrapper formId="multi-step_form">{currentStep}</FormWrapper>
        </form>
      </section>
      <footer className="bg-white h-[72px] fixed bottom-0 flex items-center w-full justify-between md:hidden">
        <button type="button" form="multi-step_form" onClick={back}>
          Go Back
        </button>
        <button type="button" form="multi-step_form" onClick={next}>
          Next Step
        </button>
      </footer>
    </main>
  );
}

export default App;
