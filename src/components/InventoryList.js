// stock list component
import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";
import Link from "next/link";

const InventoryList = () => {
  const { state, deleteItem } = useContext(AppContext);
  const [stockFilter, setStockFilter] = useState("All");
  const [editingItem, setEditingItem] = useState(null);

  // Applying filter functionality to display filtered items
  const filteredItems = state.items.filter(
    (item) =>
      stockFilter === "All" ||
      (stockFilter === "In Stock" && item.stock > 0) ||
      (stockFilter === "Out of Stock" && item.stock === 0),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Inventory</h1>

      {/* filter select button */}
      <div className="mb-4">
        <label className="mr-2">Filter by Stock:</label>
        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="border p-2"
        >
          <option value="All">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Our stock item display */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="mb-2 p-2 border rounded">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold">{item.name}</div>
                <div>Stock: {item.stock}</div>
              </div>
              <div>
                {/* Edit button */}
                <button
                  onClick={() => setEditingItem(item)}
                  className="mr-2 p-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit form  and Add new item form*/}
      {editingItem ? (
        <EditItemForm item={editingItem} setEditingItem={setEditingItem} />
      ) : (
        <AddItemForm />
      )}

      {/* Button to redirect to order page */}
      <Link
        href="/orders"
        className="flex justify-center px-2 py-1 mt-4 rounded-md bg-blue-500 w-32 text-white"
      >
        Order Details
      </Link>
    </div>
  );
};

export default InventoryList;
