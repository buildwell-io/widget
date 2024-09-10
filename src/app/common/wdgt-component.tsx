import { Wizard } from 'react-use-wizard';
import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedStep from '../utils/components/animated-step/animated-step';
import FooterStep from '../utils/components/footer-step/footer-step';
import DefaultStep from '../utils/components/default-step/default-step';
import { useEffect, useRef } from 'react';

import styles from './wdgt-component.module.scss';
import MorphBackground from './morph-background/morph-background';

export function WdgtComponent({ title }: { title: string }) {
  const previousStep = useRef<number>(0);

  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className={styles.wdgtContainer}>
      <MorphBackground />

      <div className={styles.wdgtWizardWrapper}>
        <Wizard
          footer={<FooterStep />}
          wrapper={<AnimatePresence initial={false} mode="wait" />}
        >
          {Array(4)
            .fill(null)
            .map((_, index) => {
              return (
                <AnimatedStep key={index} previousStep={previousStep}>
                  <DefaultStep idx={index + 1} withCallback={false}></DefaultStep>
                </AnimatedStep>
              );
            })}
        </Wizard>
      </div>
    </div>
  );
}


export default WdgtComponent;
