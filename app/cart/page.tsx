'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (cart.length === 0 && !showCheckoutForm) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="text-eterna-maroon mb-6">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Start shopping to add products to your cart
          </p>
          <Link
            href="/products"
            className="inline-block bg-eterna-maroon text-white px-8 py-4 rounded-lg font-semibold hover:bg-eterna-maroon/90 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {!showCheckoutForm ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.brand}</p>
                          <p className="text-sm text-eterna-maroon mt-1">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700"
                          title="Remove from cart"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border-2 border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 font-semibold border-x-2 border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm text-gray-600">
                            KES {item.price.toLocaleString()} each
                          </p>
                          <p className="text-xl font-bold text-eterna-maroon">
                            KES {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-xl rounded-lg p-6 shadow-md border border-eterna-maroon/20 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({cartCount}):</span>
                    <span>KES {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Delivery:</span>
                    <span>Contact for quote</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total:</span>
                    <span className="text-eterna-maroon">KES {cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="w-full bg-eterna-maroon text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-eterna-maroon/90 transition-colors mb-4"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-eterna-maroon flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Need help? Call us at +254 118 407 660</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-eterna-maroon flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <span>Professional delivery and installation available</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-eterna-maroon flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span>Free design consultation with your order</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CheckoutForm
            cart={cart}
            cartTotal={cartTotal}
            onBack={() => setShowCheckoutForm(false)}
          />
        )}
      </div>
    </div>
  );
}

function CheckoutForm({
  cart,
  cartTotal,
  onBack,
}: {
  cart: any[];
  cartTotal: number;
  onBack: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-eterna-maroon mb-6">
          <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Order Request Received!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your interest! Our team will contact you within 24 hours to finalize your order 
          and arrange delivery details.
        </p>
        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-block bg-eterna-maroon text-white px-8 py-4 rounded-lg font-semibold hover:bg-eterna-maroon/90 transition-colors"
          >
            Continue Shopping
          </Link>
          <br />
          <Link
            href="/"
            className="inline-block text-eterna-maroon hover:text-eterna-maroon/80 font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-eterna-maroon hover:text-eterna-maroon/80 mb-6 flex items-center gap-2">
        ← Back to Cart
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact & Delivery Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone (+254 118 407 660) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  required
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eterna-maroon focus:border-transparent"
                placeholder="Any special requests or questions?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-eterna-maroon text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-eterna-maroon/90 transition-colors"
            >
              Submit Order Request
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to be contacted about your order. No payment required now.
            </p>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white/95 backdrop-blur-xl rounded-lg p-8 shadow-md border border-eterna-maroon/20 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold">
                    KES {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-eterna-maroon">KES {cartTotal.toLocaleString()}</span>
            </div>

            <div className="mt-6 pt-6 border-t space-y-4 text-sm text-gray-600">
              <p className="font-semibold text-gray-900">What happens next?</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Our team reviews your order</li>
                <li>We contact you within 24 hours</li>
                <li>We confirm details and arrange delivery</li>
                <li>Professional installation available</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
