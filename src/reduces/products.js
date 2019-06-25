const initialState = [
    {
        name: 'Oppo1',
        'provider': 'Oppo1',
        'price': 12000
    },
    {
        name: 'Oppo2',
        'provider': 'Oppo2',
        'price': 12000
    },
    {
        name: 'Oppo3',
        'provider': 'Oppo3',
        'price': 12000
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;