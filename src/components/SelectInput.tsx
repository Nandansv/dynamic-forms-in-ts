import React, { FC, ReactElement } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

interface MenuOptions {
    value: string,
    label: string
}
/**
 * Select Input
 * It should first check if the component to be constructed is Static/ Dynamic.
 *  If Static  : Expect Options Prop to have values, 
 *  If !Static : Check for API call and get the response , construct options for menu Items 
 * @param props isStatic
 * @param props options
 * @param props api
 * @param props label
 * @param props className
 * @param props onChange
 * @returns ReactElement
 */
const SelectInput: FC<any> = (props): ReactElement => {
    const { isStatic, options, api, label, onChangeHandler } = props;
    const constructMenuItems = (isStatic_: boolean, api_: string, options_: [MenuOptions]) => {
        const menuItems = []
        if (isStatic_) {
            if (Array.isArray(options_) && options_.length > 0) {
                for (let i = 0; i < options_.length; i++) {
                    const { value, label } = options_[i];
                    if (value && label) {
                        menuItems.push(
                            <MenuItem value={value}>{label}</MenuItem>
                        )
                    }
                }
                return menuItems;
            }
        }
    }

    // Check if isStatic is true

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="something"
                    label="Age"
                    onChange={(e: SelectChangeEvent) => onChangeHandler(e)}
                >
                    {constructMenuItems(isStatic, api, options)}
                </Select>
            </FormControl>
        </>
    )
}
export default SelectInput;