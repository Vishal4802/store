// Using context api for state management
import { data } from "@/utils/data";
import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = data;

  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("appState");
      return savedState ? JSON.parse(savedState) : initialState;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  //Updating status of order
  const updateOrderStatus = (orderId, status) => {
    setState((prevState) => ({
      ...prevState,
      orders: prevState.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order,
      ),
    }));
  };

  // adding new item to our stock/inventory
  const addItem = (item) => {
    setState((prevState) => ({
      ...prevState,
      items: [...prevState.items, item],
    }));
  };

  // editing item in our stock/inventory
  const editItem = (updatedItem) => {
    setState((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    }));
  };

  // deleting item from our stock/inventory
  const deleteItem = (itemId) => {
    setState((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item) => item.id !== itemId),
    }));
  };

  return (
    <AppContext.Provider
      value={{ state, updateOrderStatus, addItem, editItem, deleteItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
