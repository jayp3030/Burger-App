/* eslint-disable react-hooks/exhaustive-deps */

const useLocalStorage = (key, initialValue) => {
  const dataFromStorage = localStorage.getItem(key);
  const initialVal = dataFromStorage
    ? JSON.parse(dataFromStorage)
    : initialValue;
  // const initialVal = initialValue

  // set data to local storage
  const setData = (payload) => {
    localStorage.setItem("orders", JSON.stringify(payload));
  };

  // get data from storage
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return [initialVal, setData, getData];
};

export default useLocalStorage;
