import * as React from 'react';

import { useWizard } from 'react-use-wizard';
import {Button} from "@nextui-org/button";

const FooterStep: React.FC = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep
  } = useWizard();

  return (
    <>
      <div>
        <Button
          color="primary"
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </Button>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          color="primary"
          onClick={() => nextStep()}
          disabled={isLoading || isLastStep}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default FooterStep;
