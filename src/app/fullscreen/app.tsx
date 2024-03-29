import NxWelcome from '../common/nx-welcome';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

/* Root */
export function App() {
    return (
        <div>
            <NxWelcome title="widget"/>
        </div>
    );
}

/* Render */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
