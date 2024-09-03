import { Wizard } from 'react-use-wizard';

import styles from './wdgt-component.module.scss';
import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedStep from '../utils/components/animated-step/animated-step';
import FooterStep from '../utils/components/footer-step/footer-step';
import DefaultStep from '../utils/components/default-step/default-step';
import { useRef } from 'react';

export function WdgtComponent({ title }: { title: string }) {
  const previousStep = useRef<number>(0);;
  return (
    <div className={styles.wdgt_wrapper}>
      <div className="wdgt_container">
        <Wizard
          footer={<FooterStep />}
          wrapper={<AnimatePresence initial={false} mode='wait' />}
        >
          {Array(4)
            .fill(null)
            .map((_, index) => {
              return (
                <Wizard>
                  <AnimatedStep key={index} previousStep={previousStep}>
                    <DefaultStep idx={index + 1} withCallback={false}></DefaultStep>
                  </AnimatedStep>
                </Wizard>
              );
            })}
        </Wizard>
      </div>
    </div>
  );
}


export default WdgtComponent;
