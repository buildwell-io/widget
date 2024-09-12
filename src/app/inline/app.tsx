import WdgtComponent from '../common/wdgt-component';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

/* Root */
export function App() {
  return (
    <WdgtComponent title="widget" />
  );
}

/* Render */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
