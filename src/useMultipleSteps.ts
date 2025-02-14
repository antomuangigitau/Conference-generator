import { ReactElement, useState } from "react";

export function useMultipleSteps(
  steps: ReactElement[],
  initialStep = 0
): {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
} {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return { currentStep, nextStep, prevStep, goToStep };
}
