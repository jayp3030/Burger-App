/* eslint-disable react/prop-types */

const Cheese = ({ orderIngredients, setOrderIngredients }) => {
  const add = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        cheese: prev.cheese + 1,
      };
    });
  };

  const remove = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        cheese: prev.cheese - 1,
      };
    });
  };

  return (
    <div className="cheese-container text-white">
      <div>
        <h2>Cheese : {orderIngredients.cheese}</h2>
      </div>
      <div className="buttons">
        <button onClick={add} disabled={orderIngredients.cheese >= 3}>
          Add
        </button>
        <button onClick={remove} disabled={orderIngredients.cheese <= 1}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cheese;
