/* eslint-disable react/prop-types */

const Patties = ({ orderIngredients , setOrderIngredients}) => {
  
  const add = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        patties: prev.patties + 1,
      };
    });
  }

  const remove = () => {
    setOrderIngredients((prev) => {
      return {
        ...orderIngredients,
        patties: prev.patties - 1,
      };
    });
  }

  return (
    <div className="patties-container text-white">
      <div>
        <h2>Patties : {orderIngredients.patties}</h2>
      </div>
      <div className="buttons">
        <button onClick={add} disabled={orderIngredients.patties >=3} >Add</button>
        <button onClick={remove} disabled={orderIngredients.patties <= 1}>Remove</button>
      </div>
    </div>
  )
}

export default Patties
