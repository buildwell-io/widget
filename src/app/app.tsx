import NxWelcome from './nx-welcome';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

/* Root */
function App() {
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
