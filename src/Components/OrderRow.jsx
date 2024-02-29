/* eslint-disable react/prop-types */
const OrdersBread = ({
  id,
  cheese,
  patties,
  salad,
  handleCancel,
  handleUpdate,
}) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{patties}</td>
        <td>{cheese}</td>
        <td>{salad}</td>
        <td>
          <button
            className="btn update-btn"
            onClick={(e) => handleUpdate(e, id)}
          >
            Update Order
          </button>
        </td>
        <td>
          <button
            className="btn cancel-btn"
            onClick={(e) => handleCancel(e, id)}
          >
            Cancel Order
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrdersBread;
