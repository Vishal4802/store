// Editing our stock items form
import { useState, useContext } from "react";
import AppContext from "@/context/AppContext";

const EditItemForm = ({ item, setEditingItem }) => {
  const { editItem } = useContext(AppContext);
  const [name, setName] = useState(item.name);
  const [stock, setStock] = useState(item.stock);

  // function to handle on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && stock) {
      const updatedItem = {
        ...item,
        name,
        stock: parseInt(stock),
      };
      editItem(updatedItem);
      setEditingItem(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Edit Item</h2>
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
        Update Item
      </button>
      <button
        type="button"
        onClick={() => setEditingItem(null)}
        className="p-2 bg-gray-500 text-white rounded ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
