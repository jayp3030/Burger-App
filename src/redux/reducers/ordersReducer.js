import { placeOrder, updateOrder } from "../actions/ordersAction";
import { cancelOrder } from "../actions/ordersAction";
const initialState = JSON.parse(localStorage.getItem("orders")) || [];

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeOrder:
      return [...state, action.payload];

    case cancelOrder:
      return state.filter((order) => order.id !== action.payload);

    case updateOrder: {
      const tempArr = [...state]
      const idx = tempArr.findIndex(curr => curr.id === action.payload.id)
      tempArr.splice(idx,1,action.payload.updatedOrder)
      return tempArr;
    }

    default:
      return state;
  }
};
