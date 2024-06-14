// Adding new stock item form
import { useState, useContext } from "react";
import AppContext from "@/context/AppContext";

const AddItemForm = () => {
  const { addItem } = useContext(AppContext);
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");

  // function to handle on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && stock) {
      const newItem = {
        id: Date.now(),
        name,
        stock: parseInt(stock),
      };
      addItem(newItem);
      setName("");
      setStock("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Add New Item</h2>
      <div className="mb-2">
        <label className="block">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
