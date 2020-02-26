let initialState = {
    addedItem: null,
    soldItems: [],
    showCart: false,
    count: 1,
    total: [],
    totalPrice: []
}

export default function(state= initialState, action) {
    let products = state.soldItems,
        totalProducts = state.total,
        totalPrice = state.totalPrice;
    switch(action.type) {
        case 'add':
            products.push(action.item)
            totalProducts.push(action.count)
            totalPrice.push(action.price)
            return Object.assign({}, state, {
                addedItem: action.item,
                showCart: action.showCart,
                soldItems: [...products],
                count: action.count,
                total: [...totalProducts] ,
                totalPrice: [...totalPrice]
            });
    default: return state

    }
}