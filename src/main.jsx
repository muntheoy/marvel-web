import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Подключаем основной компонент
import './index.css'; // CSS стили, если они есть

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);