/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Cheese from "./Cheese";
import Salad from "./Salad";
import Patties from "./Patties";
import {useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/actions/ordersAction";


const Bread = () => {
  const [orderIngredients, setOrderIngredients] = useState({
    patties: 1,
    cheese: 1,
    salad: 1,
  });
  const [data , setData , getData] = useLocalStorage('orders' , [])
  const dispatch = useDispatch();
 
  const getId =() =>{
    return data.length === 0 ? 0 : data[data.length - 1].id
  }

  const placeOrder = () => {
    dispatch(addOrder({ id : getId()+1 ,...orderIngredients}));
    setData([...data ,{ id : getId()+1 ,...orderIngredients}]);
    setOrderIngredients({
      patties: 1,
      cheese: 1,
      salad: 1,
    });
    alert("Order Placed Successfully..");
  };

  return (
    <div className="main-bread-wrapper">
      <h1>Select Your Ingredients</h1>
      <div className="bread-container">
        <Patties
          orderIngredients={orderIngredients}
          setOrderIngredients={setOrderIngredients}
        />
        <Cheese
          orderIngredients={orderIngredients}
          setOrderIngredients={setOrderIngredients}
        />
        <Salad
          orderIngredients={orderIngredients}
          setOrderIngredients={setOrderIngredients}
        />
      </div>
      <div>
        <button onClick={placeOrder}>place order</button>
      </div>
    </div>
  );
};

export default Bread;
