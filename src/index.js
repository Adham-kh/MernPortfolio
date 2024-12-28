import React from 'react';
import { createRoot } from 'react-dom/client'; // Новый метод
import App from './App';
import './index.css';
// Находим корневой элемент
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Создаем "корень"

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);