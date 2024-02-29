/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import Patties from "./Patties";
import Cheese from "./Cheese";
import Salad from "./Salad";
import { useCallback, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, updateOrder } from "../redux/actions/ordersAction";

const UpdateOrder = () => {
  const { id } = useParams();
  const [data, setData, getData] = useLocalStorage("orders", []);
  const [orderToUpdt, setOrderToUpdt] = useState({
      cheese: 1,
      patties: 1,
      salad: 1,
    });
    const orders = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const filteredArr = orders.filter(
      (curr) => curr.id.toString() === id.toString()
    );
    setOrderToUpdt(filteredArr[0]);
  }, []);

  const updtOrder = () => {
    const idx = orders.findIndex((curr) => curr.id === parseInt(id));
    orders.splice(idx, 1, { id: id, ...orderToUpdt });
    setData(orders);
    dispatch(updateOrder(+id, orderToUpdt));
    alert("Order Updated Successfully..");
    setOrderToUpdt({
      cheese: 1,
      patties: 1,
      salad: 1,
    })
    navigate('/orders')
  };

  return (
    <div className="main-bread-wrapper">
      <h1>Select Your Ingridients</h1>
      <div className="bread-container">
        {/* {console.log(orderToUpdt)} */}
        <Patties
          orderIngredients={orderToUpdt}
          setOrderIngredients={setOrderToUpdt}
        />
        <Cheese
          orderIngredients={orderToUpdt}
          setOrderIngredients={setOrderToUpdt}
        />
        <Salad
          orderIngredients={orderToUpdt}
          setOrderIngredients={setOrderToUpdt}
        />
      </div>
      <div>
        <button onClick={updtOrder}>Update order</button>
      </div>
    </div>
  );
};

export default UpdateOrder;
