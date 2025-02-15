import { useState } from "react";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "@/Attendee";
import Confirmation from "@/Confirmation";

const TicketContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TicketSelection nextStep={handleNextStep} />;
      case 2:
        return (
          <AttendeeDetails
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 3:
        return <Confirmation />;
      default:
        return <TicketSelection nextStep={handleNextStep} />;
    }
  };
  return (
    <div className="p-4 w-[700px] border border-[#0E464F] rounded-3xl sm:p-10">
      <div className="text-grey-98 flex flex-col justify-between sm:items-center sm:flex-row">
        <h3 className="font-playfair-display text-2xl">
          {currentStep === 1 && "Ticket Selection"}
          {currentStep === 2 && "Attendee Details"}
          {currentStep === 3 && "Ready"}
        </h3>
        <p>Step {currentStep}/3</p>
      </div>
      <div className="w-full h-1 bg-[#0E464F] rounded-3xl mt-2">
        <div
          className="bg-[#24A0B5] h-1 rounded-3xl"
          style={{
            width:
              currentStep === 1 ? "33.3%" : currentStep == 2 ? "66.6%" : "100%",
          }}></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default TicketContainer;
