
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Audio",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Wearables",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      category: "Accessories",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      id: 5,
      name: "iPhone 15",
      category: "Mobile",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 6,
      name: "Samsung Galaxy S24",
      category: "Mobile",
      price: 69999,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    },
    {
      id: 7,
      name: "MacBook Air M3",
      category: "Laptop",
      price: 114999,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    },
    {
      id: 8,
      name: "Dell XPS 13",
      category: "Laptop",
      price: 89999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 9,
      name: "Sony Camera",
      category: "Camera",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
    {
      id: 11,
      name: "Tablet Pro",
      category: "Tablet",
      price: 32999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    },
    {
      id: 12,
      name: "Gaming Chair",
      category: "Furniture",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=500",
    },
  ];

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
  );

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Shopper</h1>

        <div className="bg-blue-500 px-4 py-2 rounded-lg">
          Cart: {cart.length}
        </div>
      </nav>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 px-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-80 p-3 rounded-lg border outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-lg border"
        >
          <option value="All">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Audio">Audio</option>
          <option value="Camera">Camera</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
          <option value="Tablet">Tablet</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{item.name}</h2>

              <p className="text-gray-500 text-sm mt-1">
                {item.category}
              </p>

              <p className="text-green-600 text-xl my-3">
                ₹{item.price.toLocaleString()}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="fixed bottom-5 right-5 bg-slate-900 text-white p-5 rounded-xl shadow-xl">
        <h2 className="text-xl font-bold mb-2">
          Shopping Cart
        </h2>

        <p>Items: {cart.length}</p>
        <p>Total: ₹{total.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default App;

