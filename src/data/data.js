export const getCompanyCeo = () => {
    return{
        'items':[
            {
                'Emp. ID' : 'U1234',
                'Emp. Name' : 'Tim Cook',
                'Company' : 'Apple'
            },
            {
                'Emp. ID' : 'U1235',
                'Emp. Name' : 'Sundar Pichai',
                'Company' : 'Google'
            },
            {
                'Emp. ID' : 'U1236',
                'Emp. Name' : 'Jeff Bezos',
                'Company' : 'Amazon'
            },

        ],
        'headers' : ['Emp. ID','Emp.Name','Company']
    }
}

export const getCompanyRevenue = () => {
    return{
        'items' : [
            {
                'Company' : 'Apple',
                'Revenue(USD)' : '$111.4 billion'
            },
            {
                'Company' : 'Google',
                'Revenue(USD)' : '$741 billion'
            },
            {
                'Company' : 'Amazon',
                'Revenue(USD)' : '$233 billion'
            }
        ],
        'headers' : ['Company','Revenue(USD)']
    }
}
