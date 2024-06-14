// Individual order details component
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";

const OrderDetails = () => {
  const { state, updateOrderStatus } = useContext(AppContext);

  // fetching order slug link and order details form our context
  const router = useRouter();
  const { id } = router.query;
  const order = state.orders.find((order) => order.id == id);

  // no order case
  if (!order) return <p>Order not found</p>;

  // function to update order status
  const handleMarkAsCompleted = () => {
    updateOrderStatus(order.id, "Completed");
    router.push("/orders");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col h-[100vh] justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="mb-4">
        <div>
          <strong>Customer:</strong> {order.customer}
        </div>
        <div>
          <strong>Status:</strong> {order.status}
        </div>
        <div>
          <strong>Items:</strong>
        </div>
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - In Stock:{" "}
              {state.items.find((i) => i.id === item.id)?.stock}
            </li>
          ))}
        </ul>
        {order.status === "Pending" && (
          <button
            onClick={handleMarkAsCompleted}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Mark as Completed
          </button>
        )}
      </div>

      {/* Redirect to order page */}
      <Link
        href="/orders"
        className="flex justify-center px-2 py-1 mt-4 rounded-md bg-red-500 w-32 text-white"
      >
        Back
      </Link>
    </div>
  );
};

export default OrderDetails;
