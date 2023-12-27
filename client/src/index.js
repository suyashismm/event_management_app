import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './context/DataProvider';
import { EventProvider } from './context/EventProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EventProvider>
        <DataProvider>
            <App />
        </DataProvider>
    </EventProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
