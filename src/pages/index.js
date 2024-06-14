//Homepage of our website
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col w-[100%] h-[100vh] justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">
        Inventory and Manufacturing Unit Management System
      </h1>

      {/* Links for orders and inventory */}
      <div className="flex space-x-4">
        <Link href="/orders" className="p-4 bg-blue-500 text-white rounded">
          View Orders
        </Link>
        <Link href="/inventory" className="p-4 bg-green-500 text-white rounded">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
