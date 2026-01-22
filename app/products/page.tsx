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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eterna-maroon via-amber-900 to-eterna-black text-white py-32">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Premium Interior Products
            </h1>
            <p className="text-lg sm:text-xl text-eterna-accent/90 mb-8 max-w-2xl mx-auto">
              Browse our curated collection of luxury furniture, lighting, textiles, and more. 
              The same premium products we use in our interior design projects, now available for purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-eterna-accent text-eterna-black px-8 py-4 font-semibold hover:bg-eterna-accent/90 transition-all shadow-lg text-center"
              >
                Need Design Help?
              </Link>
              <Link 
                href="/services"
                className="border-2 border-eterna-accent text-eterna-accent px-8 py-4 font-semibold hover:bg-eterna-accent/10 transition-all text-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 focus:border-eterna-maroon focus:outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-eterna-maroon text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-6 text-center text-gray-600 font-medium">
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
      <section className="py-20 bg-gradient-to-b from-eterna-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-eterna-accent mb-12">
              Why Buy From Eterna Interiors?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-eterna-accent/20 hover:border-eterna-accent/40 transition-all">
                <svg className="w-16 h-16 mx-auto mb-4 text-eterna-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h3 className="text-xl font-semibold mb-3 text-eterna-accent">Designer Quality</h3>
                <p className="text-gray-300">
                  The same premium products our designers use in luxury projects
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-eterna-accent/20 hover:border-eterna-accent/40 transition-all">
                <svg className="w-16 h-16 mx-auto mb-4 text-eterna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-3 text-eterna-accent">Expert Guidance</h3>
                <p className="text-gray-300">
                  Free consultation to help you choose the right products
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-eterna-accent/20 hover:border-eterna-accent/40 transition-all sm:col-span-2 lg:col-span-1">
                <svg className="w-16 h-16 mx-auto mb-4 text-eterna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <h3 className="text-xl font-semibold mb-3 text-eterna-accent">Professional Delivery</h3>
                <p className="text-gray-300">
                  White-glove delivery and installation services available across Kenya
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
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-1">Price</p>
              <span className="text-xl font-bold text-eterna-maroon">
                KES {product.price.toLocaleString()}
              </span>
            </div>
            <span className="text-eterna-maroon font-semibold hover:text-eterna-maroon/80 flex items-center gap-1">
              View Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
