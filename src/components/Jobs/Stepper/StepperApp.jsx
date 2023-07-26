import React, { useState } from "react";
import Complete from "./Complete";
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Stepper from "./Stepper";
import { UseContextProvider } from "./StepperContext";
import StepperControl from "./StepperControl";

const StepperApp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Personal Details",
    "Education",
    "CV & Cover Letter",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Education />;
      case 3:
        return <Experience />;
      case 4:
        return <Complete />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2 ">
      {/* Stepper */}
      <div className="horizontal container mt-5  ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-6 p-5 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default StepperApp;
