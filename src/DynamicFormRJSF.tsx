import { ReactElement, FC } from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";

const DynamicFormRJSF: FC<any> = (props): ReactElement => {

    const schema: JSONSchema7 = {
        "title": "New Account",
        "description": "Account Creation Form",
        "type": "object",
        "properties": {
            "accountType" :
            {
                "type": "number",
                "anyOf": [
                  {
                    "type": "number",
                    "title": "one",
                    "enum": [
                      1
                    ]
                  },
                  {
                    "type": "number",
                    "title": "two",
                    "enum": [
                      2
                    ]
                  },
                  {
                    "type": "number",
                    "title": "three",
                    "enum": [
                      3
                    ]
                  }
                ]
              },
            "name": {
                "type": "string"
            },
            "legalBusinessName": {
                "type": "string"
            },
            "taxId": {
                "type": "string"
            },
            "shortDescription": {
                "type": "string"
            },
            "longDescription" :{
                "type": "string"
            }
        }
        
    };
    
    const uiSchema = {
        longDescription : {"ui:widget": "textarea",
        "ui:options": {
          rows: 4
        }}
    }
    return (
        <div style={{ border: '1px solid black', margin: 'auto', display: 'table' }}>
            <Form schema={schema}
            uiSchema={uiSchema}
            
            />
        </div>
    )
};
export default DynamicFormRJSF;