import React, { useState, useEffect } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, CheckCircle, RefreshCw, ShoppingCart } from 'lucide-react';

// Sample Product Catalog
const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 120, category: 'Electronics', image: '🎧' },
  { id: 2, name: 'Minimalist Watch', price: 85, category: 'Accessories', image: '⌚' },
  { id: 3, name: 'Cotton T-Shirt', price: 25, category: 'Clothing', image: '👕' },
  { id: 4, name: 'Canvas Backpack', price: 65, category: 'Accessories', image: '🎒' },
  { id: 5, name: 'Mechanical Keyboard', price: 110, category: 'Electronics', image: '⌨️' },
  { id: 6, name: 'Stainless Water Bottle', price: 20, category: 'Lifestyle', image: '🍾' },
];

export default function App() {
  // Load initial cart state from LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('app_shopping_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart from LocalStorage', error);
      return [];
    }
  });

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Sync cart to LocalStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('app_shopping_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to LocalStorage', error);
    }
  }, [cart]);

  // Add Item to Cart
  const addToCart = (product) => {
    setCheckoutSuccess(false);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update Item Quantity
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove Item from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear Entire Cart
  const clearCart = () => {
    setCart([]);
  };

  // Handle Checkout Action
  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutSuccess(true);
    setCart([]);
  };

  // Totals Calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">SimpleShop</h1>
              <p className="text-xs text-slate-500">Clean & Persisted React Shopping Cart</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600">
            <ShoppingCart className="w-4 h-4 text-indigo-600" />
            <span>{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
          </div>
        </header>

        {/* Checkout Notification */}
        {checkoutSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center justify-between text-sm animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span><strong>Order Placed Successfully!</strong> Thank you for your purchase.</span>
            </div>
            <button 
              onClick={() => setCheckoutSuccess(false)}
              className="text-xs text-emerald-600 hover:text-emerald-900 font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Main Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Products List (Left Side - 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-3xl mb-2 block">{product.image}</span>
                      <h3 className="font-semibold text-slate-800">{product.name}</h3>
                      <span className="text-xs text-slate-400">{product.category}</span>
                    </div>
                    <span className="font-bold text-slate-900 text-base">${product.price}</span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-medium py-2 rounded-lg transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart Summary (Right Side - 5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <span>Your Cart</span>
                <span className="text-xs font-normal text-slate-400">({cart.length} types)</span>
              </h2>

              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-500 hover:text-rose-700 flex items-center gap-1 transition"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Clear Cart</span>
                </button>
              )}
            </div>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="py-10 text-center text-slate-400 space-y-2">
                <ShoppingCart className="w-10 h-10 mx-auto opacity-30" />
                <p className="text-sm">Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{item.image}</span>
                      <div>
                        <h4 className="font-medium text-slate-800 text-xs sm:text-sm">{item.name}</h4>
                        <span className="text-xs text-slate-500">${item.price} each</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-200 bg-white rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-slate-500 hover:text-slate-800 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-slate-500 hover:text-slate-800 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price Calculations */}
            {cart.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Tax (5%)</span>
                  <span className="font-medium text-slate-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-indigo-600">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition active:scale-95 shadow-md shadow-indigo-200"
                >
                  Checkout (${total.toFixed(2)})
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}