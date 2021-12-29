import React, { ReactElement, FC } from "react";
import TextInput from './components/TextInput';
import { TEXTFIELD } from './Constants';
const DynamicFormRenderer: FC<any> = (props): ReactElement => {
    const { components } = props;
    const constructComponents = (params: [any]) => {
        let componentArray: any = [];
        if (Array.isArray(params) && params.length > 0) {
            for (let i = 0; i < params.length; i++) {
                const { type, label, id } = params[i];
                if (type === TEXTFIELD) {
                    componentArray.push(<div style={{ margin: '8px' }}><TextInput id={id} label={label} variant="outlined" /></div>)
                } else {
                    componentArray.push(<>No Component Found</>)
                }
            }
        }
        return componentArray;
    }
    return (
        <div style={{ border: '1px solid black', margin: 'auto', display: 'flex' }}>
            <div style={{ display: 'grid', marginLeft: 'auto', marginRight: 'auto' }}>
                {constructComponents(components)}
            </div>
        </div>
    );
};
export default DynamicFormRenderer;