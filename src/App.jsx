import "./App.css";
import Bread from "./Components/Bread";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Orders from "./Components/Orders";
import { useSelector } from "react-redux";
import UpdateOrder from "./Components/UpdateOrder";

function App() {
  const ordersFromStore = useSelector((state) => state.orders);

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">{`Orders (${
                ordersFromStore ? ordersFromStore.length : 0
              })`}</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Bread />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/update/:id" element={<UpdateOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
