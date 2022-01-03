import React, { ReactElement, FC, useState } from "react";
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import { TEXTFIELD, SELECT } from './Constants';
import { Typography, Button, Stack } from "@mui/material";
const DynamicFormRenderer: FC<any> = (props): ReactElement => {
    const { components, formTitle, submitButtonLabel } = props;
    const [state, setState] = useState({});
    const constructComponents = (params: [any]) => {
        let componentArray: any = [];
        if (Array.isArray(params) && params.length > 0) {
            for (let i = 0; i < params.length; i++) {
                const { type, label, id, options, isStatic, required } = params[i];
                switch (type) {
                    case TEXTFIELD:
                        componentArray.push(<div style={{ margin: '8px' }}>
                            <TextInput id={id} label={label} variant="outlined" required={required} onChange={(e: { target: { id: any; value: any; }; }) => setState({ ...state, [id]: e.target.value })} />
                        </div>)
                        break;
                    case SELECT:
                        componentArray.push(<div style={{margin: '8px'}}>
                            <SelectInput
                                label={label}
                                options={options}
                                isStatic={isStatic}
                                id={id}
                                required={required}
                                value={(state[id as keyof typeof state] || '')}
                                onChangeHandler={(evt: any) => setState({ ...state, [id]: evt.target.value })
                                }
                            /></div>)
                        break;
                    default:
                        componentArray.push(<>No Component Found</>)
                        break;
                }
            }
        }
        return componentArray;
    }
    return (
        <div style={{ border: '1px solid black', margin: 'auto', display: 'table' }}>
            <Stack spacing={3}>
                <Typography variant="h2" gutterBottom>{formTitle}</Typography>
                {constructComponents(components)}
                <div style={{margin:'auto', marginBottom : '10px'}}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => alert(JSON.stringify(state))}>{submitButtonLabel}</Button>
                    <Button variant="outlined" onClick={() => setState({})}>Clear</Button>
                </Stack>
                </div>
            </Stack>
        </div>
    );
};
export default DynamicFormRenderer;