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
        isFirstStep,
    } = useWizard();

    return (
      <>
          <code>
             {/* <Info>
                  <p>Has previous step: {!isFirstStep ? '✅' : '⛔'}</p>
                  <br />
                  <p>Has next step: {!isLastStep ? '✅' : '⛔'} </p>
                  <br />
                  <p>
                      Active step: {activeStep + 1} <br />
                  </p>
                  <br />
                  <p>
                      Total steps: {stepCount} <br />
                  </p>
              </Info>*/}
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
                  />
              </div>
          </code>
      </>
    );
};

export default FooterStep;
