import ParentApp from "./component";
import React from 'react';
import ReactDOM from 'react-dom/client';

    // Get the root DOM element
    const rootElement = document.getElementById('root');

    // Create a React root
    const root = ReactDOM.createRoot(rootElement);

    // Render your component into the root
    root.render(
        <React.StrictMode>
            <ParentApp />
        </React.StrictMode>
    );