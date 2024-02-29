/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useMemo, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../redux/actions/ordersAction";
import Pagination from "./Pagination";
import OrdersRow from "./OrderRow";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [query, setquery] = useState("");
  const [sortByVal, setSortByVal] = useState("id");
  const [order, setorder] = useState("asc");
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [data, setData, getData] = useLocalStorage("orders", []);
  const dispatch = useDispatch();
  const ordersFromStore = useSelector((state) => state.orders);
  const totalPages = Math.ceil(ordersFromStore.length / limit);
  const navigate = useNavigate();


  // search functionallity
  const handleSearch = (dataToShow, key) => {
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    if (order == "asc") {
      return dataToShow
        .sort((a, b) => a[key] - b[key])
        .filter((curr) => curr.id.toString().includes(query.toString()))
        .slice(startIdx, endIdx);
    }
    if (order == "dsc") {
      return dataToShow
        .sort((a, b) => b[key] - a[key])
        .filter((curr) => curr.id.toString().includes(query.toString()))
        .slice(startIdx, endIdx);
    }
  };

  // cancel order functionallity
  const handleCancel = (e, id) => {
    const newOrders = ordersFromStore.filter((order) => {
      return order.id !== id;
    });
    setData(newOrders); // removing from localStorage
    dispatch(removeOrder(id)); // removing from Store
    if (ordersFromStore.length-1 <= (page-1)*limit) setpage((prev) => prev - 1)
  };

  const handleUpdate = (e,id) =>{ 
    const confirmation = confirm('Are you sure ?')
    confirmation ? navigate(`/update/${id}`) : null
  }

  return ordersFromStore.length === 0 ? (
    <h1 className="not-order">There's Not Any Ordres..</h1>
  ) : (
    <div className="main-orders">
      <h1>Your Orders</h1>
      <div className="search-wrapper">
        <input
          className="searchBar"
          type="text"
          value={query}
          placeholder="search by ID"
          onChange={(e) => {
            setquery(e.target.value);
            setpage(1);
          }}
        />
        <div className="sort-wrapper">
          <h3>Sort by :</h3>
          <select
            className="selectInput"
            defaultValue="id"
            onChange={(e) => setSortByVal(e.target.value)}
          >
            <option value="id">id</option>
            <option value="cheese">cheese</option>
            <option value="salad">salad</option>
            <option value="patties">patties</option>
          </select>
          <select
            className="selectInput"
            defaultValue="asc"
            onChange={(e) => {
              setorder(e.target.value);
            }}
          >
            <option value="asc">asc</option>
            <option value="dsc">desc</option>
          </select>
        </div>
      </div>
      <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patties</th>
            <th>Cheese</th>
            <th>Salad</th>
            <th>###</th>
            <th>###</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch(ordersFromStore, sortByVal).length === 0 ? (
            <tr>
              <td>
                <h3>No data Found...</h3>
              </td>
            </tr>
          ) : (
            handleSearch(ordersFromStore, sortByVal).map((order) => (
              <OrdersRow
                key={order.id}
                id={order.id}
                cheese={order.cheese}
                patties={order.patties}
                salad={order.salad}
                handleCancel={handleCancel}
                handleUpdate={handleUpdate}
              />
            ))
          )}
        </tbody>
      </table>
      </div>
      <div className="pagginationBtnWrapper">
        {totalPages === 1 ? null : (
          <Pagination
            totalPages={totalPages}
            currPage={page}
            prevPage={() => setpage((prev) => prev - 1)}
            nextPage={() => setpage((prev) => prev + 1)}
            firstPage={() => setpage(1)}
            lastPage={() => setpage(totalPages)}
          />
        )}
      </div>
    </div>
  );
};

export default Orders;
