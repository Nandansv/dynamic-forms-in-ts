import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import componentMapper from '@data-driven-forms/mui-component-mapper/component-mapper';
import accountConfig from './config/Account.json';
const schema = {
    "title": "New Account Creation Form",
    "description": "Enter Details",
    "fields": [
      {
        "component": "select",
        "label": "Account Type",
        "name": "accountType",
        "options" : accountConfig.AccountEntities.map(e => ({
            label: e.Name,
            value: e.Id
        })),
      },
      {
        "component": "text-field",
        "label": "Name",
        "name": "name",
        FormFieldGridProps: { xs: 6},
      },
      {
        "component": "text-field",
        "label": "Legal Business Name",
        "name": "legalBusinessName",
        FormFieldGridProps: { xs: 5.9, sx: {marginLeft : '10px'} },
      },
      {
        "component": "text-field",
        "label": "Tax ID",
        "name": "taxId",
        FormFieldGridProps: { xs: 6 },
      },
      {
        "component": "text-field",
        "label": "Short Description",
        "name": "shortDescription",
        FormFieldGridProps: { xs: 5.9, sx: {marginLeft : '10px'}  },
      },
      {
        "component": "textarea",
        "label": "Long Description",
        "name": "longDescription",
        
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
