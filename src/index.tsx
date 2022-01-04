import React from 'react';
import ReactDOM from 'react-dom';
import DynamicFormRenderer from './DynamicFormRenderer';
import DynamicFormRJSF from './DynamicFormRJSF'
import reportWebVitals from './reportWebVitals';
import { components } from './config/ComponentConfig'

ReactDOM.render(
  <React.StrictMode>
    {/* <DynamicFormRenderer
      components={components}
      formTitle="Dynamic Form Renderer"
      submitButtonLabel="Save"
    /> */}
    <DynamicFormRJSF/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
