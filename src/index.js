import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// запустить терминал; убедившись что находитесь в корневом каталоге - в терминале выполнить: yarn install, затем yarn start...
// в терминале: Ctrl + C и Ctrl + D - прерывают работу программ.

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <App />
);