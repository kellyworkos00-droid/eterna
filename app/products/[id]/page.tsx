'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { getProductById } from '@/lib/products';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-amber-600 hover:text-amber-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-40">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-eterna-maroon">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-eterna-maroon">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              {product.featured && (
                <div className="absolute top-4 left-4 bg-eterna-maroon text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Featured Product
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="inline-block bg-eterna-maroon/10 text-eterna-maroon px-3 py-1 rounded-full text-sm font-semibold uppercase">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="text-sm text-gray-600 mb-6">
              by <span className="font-semibold">{product.brand}</span>
            </div>

            <div className="text-4xl font-bold text-eterna-maroon mb-6">
              KES {product.price.toLocaleString()}
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    value && (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <dt className="text-gray-600 capitalize">{key}:</dt>
                        <dd className="text-gray-900 font-medium">{value}</dd>
                      </div>
                    )
                  ))}
                </dl>
              </div>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="inline-flex items-center text-green-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center text-red-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity Selector & Add to Cart */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-medium">Quantity:</label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold border-x-2 border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-eterna-maroon text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-eterna-maroon/90 transition-all shadow-lg hover:shadow-xl"
                >
                  {addedToCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Added to Cart!
                    </span>
                  ) : 'Add to Cart'}
                </button>

                <div className="flex gap-4">
                  <Link
                    href="/cart"
                    className="flex-1 border-2 border-eterna-maroon text-eterna-maroon py-4 px-8 rounded-lg font-semibold text-center hover:bg-eterna-maroon/10 transition-colors"
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                  >
                    Ask Questions
                  </Link>
                </div>
              </div>
            )}

            {/* Info Boxes */}
            <div className="mt-8 space-y-4">
              <div className="border border-eterna-maroon/20 rounded-lg p-4 flex items-start gap-3 bg-white/50 backdrop-blur-sm">
                <div className="text-eterna-maroon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Design Consultation</h4>
                  <p className="text-sm text-gray-600">
                    Not sure if this product is right? Our designers can help you make the perfect choice.
                  </p>
                </div>
              </div>
              <div className="border border-eterna-maroon/20 rounded-lg p-4 flex items-start gap-3 bg-white/50 backdrop-blur-sm">
                <div className="text-eterna-maroon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Professional Delivery</h4>
                  <p className="text-sm text-gray-600">
                    White-glove delivery and installation services available. Contact us for details.
                  </p>
                </div>
              </div>
              <div className="border border-eterna-maroon/20 rounded-lg p-4 flex items-start gap-3 bg-white/50 backdrop-blur-sm">
                <div className="text-eterna-maroon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-600">
                    The same luxury products used in our professional interior design projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
