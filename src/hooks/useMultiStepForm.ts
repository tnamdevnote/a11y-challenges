import React, { ReactElement, useState } from "react";

function useMultiStepForm(steps: ReactElement[]) {
  // Keep track of current step index
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // next step
  const next = () => {
    setCurrentStepIndex((prev) => {
      // if we are on the last step, don't increment and just return current index.
      if (currentStepIndex >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((prev) => {
      // if we are on the first step, don't decrement and just return current index.
      if (currentStepIndex <= 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    isStart: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
    next,
    back,
    goTo,
  };
}

export default useMultiStepForm;
