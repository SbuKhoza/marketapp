import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-100 text-left">Product</th>
                  <th className="py-3 px-4 bg-gray-100 text-right">Price</th>
                  <th className="py-3 px-4 bg-gray-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 text-gray-900 font-medium">
                      {item.name}
                    </td>
                    <td className="py-4 px-4 text-gray-900 font-medium text-right">
                      ${item.discount_price || item.price}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;