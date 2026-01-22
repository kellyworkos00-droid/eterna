'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { Product } from '@/types/product';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'textiles', name: 'Textiles' },
  { id: 'wallcoverings', name: 'Wallcoverings' },
  { id: 'flooring', name: 'Flooring' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'paint', name: 'Paint & Finishes' }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Interior Products
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Browse our curated collection of luxury furniture, lighting, textiles, and more. 
              The same premium products we use in our interior design projects, now available for purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-center"
              >
                Need Design Help?
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-6 py-3 border-2 border-gray-200 rounded-full focus:border-amber-600 focus:outline-none"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-amber-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Buy From Eterna Interiors?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Designer Quality</h3>
                <p className="text-gray-600">
                  The same premium products our designers use in luxury projects
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Free consultation to help you choose the right products
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Professional Delivery</h3>
                <p className="text-gray-600">
                  White-glove delivery and installation services available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          {product.featured && (
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="text-sm text-amber-600 font-semibold mb-2 uppercase tracking-wide">
            {product.category}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="text-sm text-gray-500 mb-4">
            {product.brand}
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-2xl font-bold text-amber-900">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-amber-600 font-semibold hover:text-amber-700">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
