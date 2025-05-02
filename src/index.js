import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import './style.css';
import translations from './translations';

i18next
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en-GB',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    const container = document.getElementById('root');
    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });




