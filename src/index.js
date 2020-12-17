import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './custom.scss';
import ThemeModeProvider from './context/ThemeContext';

ReactDOM.render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
