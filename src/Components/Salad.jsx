/* eslint-disable react/prop-types */

const Salad = ({ orderIngredients , setOrderIngredients}) => {
  const add = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        salad: prev.salad + 1,
      };
    });
  }

  const remove = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        salad: prev.salad - 1,
      };
    });
  }

  return (
    <div className="salad-container  text-white">
      <div>
        <h2>Salad : {orderIngredients.salad}</h2>
      </div>
      <div className="buttons">
        <button onClick={add } disabled={orderIngredients.salad >=3}>Add</button>
        <button onClick={remove} disabled={orderIngredients.salad <= 1}>Remove</button>
      </div>
    </div>
  )
}

export default Salad
