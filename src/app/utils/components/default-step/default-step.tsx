import * as React from 'react';
import { useWizard } from 'react-use-wizard';


type Props = {
  idx: number;
  withCallback?: boolean;
};

const DefaultStep = function({ idx, withCallback = true }: Props) {
  const { isLoading, handleStep } = useWizard();

  if (withCallback) {
    handleStep(() => {
      alert('Going to next step');
    });
  }

  return (
    <div>
      <p>(Sync) Step {idx}</p>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default DefaultStep;
