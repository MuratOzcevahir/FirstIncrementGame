import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Increment from './test-components/test-A/Increment';
import ToDo from './test-components/test-B-todo/ToDo';
import AppTest from './test-components/test-page/AppTest';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
                {/* <ToDo /> */}
                <Increment />
                {/* <App /> */}

        </>
);
