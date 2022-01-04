import { ReactElement, FC } from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";


const DynamicFormRJSF: FC<any> = (props): ReactElement => {

    const schema: JSONSchema7 = {
        "title": "New Account",
        "description": "Account Creation Form",
        "type": "object",
        "properties": {
            "Account Type" :
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
            "Name": {
                "type": "string"
            },
            "Legal Business Name": {
                "type": "string"
            },
            "Tax ID": {
                "type": "string"
            },
            "Short Description": {
                "type": "string"
            },
            "Long Description" :{
                "type": "string"
            }
        }
    };

    return (
        <div style={{ border: '1px solid black', margin: 'auto', display: 'table' }}>
            <Form schema={schema}
            />
        </div>
    )
};
export default DynamicFormRJSF;