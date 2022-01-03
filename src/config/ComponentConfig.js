module.exports = {
    components : [
        {
            id: 'firstInput',
            name: 'firstInput',
            type: 'TEXTFIELD',
            label: 'First Input',
            required: true,
            options: [],
            style: {},
            handler: () => {},
            defaultValue: '',
            isStatic : false,
        },
        {
            id: 'secondInput',
            name: 'secondInput',
            type: 'TEXTFIELD',
            label: 'Second Input',
            required: true,
            options: [],
            style: {},
            handler: () => {},
            defaultValue: '',
            isStatic : false,
        },
        {
            id: 'thirdInput',
            name: 'thirdInput',
            type: 'TEXTFIELD',
            label: 'Third Input',
            required: true,
            options: [],
            style: {},
            handler: () => {},
            defaultValue: '',
            isStatic : false,
        },
        {
            id: 'selectField',
            name: 'selectField',
            type: 'SELECT',
            label: 'Select Field Input 1',
            required: true,
            options: [{
                value: 'val1',
                label: 'val1'
            },
            {
                value: 'val2',
                label: 'val2'
            }],
            style: {},
            handler: () => {},
            defaultValue: '',
            isStatic : true,

        }
    ]
}