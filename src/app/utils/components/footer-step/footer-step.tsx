import * as React from 'react';

import { useWizard } from 'react-use-wizard';

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
        <button
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </button>
        <button
          onClick={() => nextStep()}
          disabled={isLoading || isLastStep}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FooterStep;
