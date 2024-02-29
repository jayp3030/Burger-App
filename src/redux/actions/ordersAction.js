export const placeOrder = 'PLACE_ORDER'
export const cancelOrder = 'CANCEL_ORDER'

export const addOrder = (order) => {
    return {
        type : placeOrder,
        payload : order
    }
}

export const removeOrder = (orderID) => {
    return {
        type : cancelOrder,
        payload : orderID
    }
}
export const updateOrder = (orderID , updatedOrder) => {
    return {
        type : cancelOrder,
        payload : {
            id:orderID,
            updatedOrder:updatedOrder
        }
    }
}

