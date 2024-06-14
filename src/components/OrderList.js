// Order list component
import { useContext, useState } from "react";
import Link from "next/link";
import AppContext from "@/context/AppContext";

const OrderList = () => {
  const { state } = useContext(AppContext);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = state.orders.filter(
    (order) => statusFilter === "All" || order.status === statusFilter,
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Orders</h1>

      {/* Filter options for our orders */}
      <div className="mb-4">
        <label className="mr-2">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Our order items */}
      <ul>
        {filteredOrders.map((order) => (
          <li key={order.id} className="mb-2 p-2 border rounded">
            {/* Link for individual order details */}
            <Link href={`/orders/${order.id}`}>
              <div className="font-bold">Order ID: {order.id}</div>
              <div>Customer: {order.customer}</div>
              <div>Status: {order.status}</div>
              <div>Item Count: {order.items.length}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/inventory"
        className="flex justify-center px-2 py-1 mt-4 rounded-md bg-green-500 w-32 text-white"
      >
        Go to Inventory
      </Link>
    </div>
  );
};

export default OrderList;
