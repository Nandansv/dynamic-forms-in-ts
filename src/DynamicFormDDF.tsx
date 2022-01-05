import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import componentMapper from '@data-driven-forms/mui-component-mapper/component-mapper';

const schema = {
    "fields": [
      {
        "component": "text-field",
        "label": "Name",
        "name": "name"
      },
      {
        "component": "text-field",
        "label": "Legal Business Name",
        "name": "legalBusinessName"
      }
    ]
  };
export default class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}
