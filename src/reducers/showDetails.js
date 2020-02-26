import data from '../../src/data/store-items.json'

let intialState = {
    products: data,
    item: null,
    showItem: false,
    showCart: false,
    similarItems: [
        data[Math.floor(Math.random() * 8) + 1],
        data[Math.floor(Math.random() * 8) + 1],
        data[Math.floor(Math.random() * 8) + 1]
    ],
}

export default function (state = intialState,action) {
    switch(action.type) {
        case "get": 
        return Object.assign({}, state, {
            item: state.products[action.id] ,
            showItem: true,
            similarItems: [
                data[Math.floor(Math.random() * 8) + 1],
                data[Math.floor(Math.random() * 8) + 1],
                data[Math.floor(Math.random() * 8) + 1]
            ],
        })
        
        default: return state
}
}