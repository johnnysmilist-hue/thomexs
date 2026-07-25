'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FiClock, FiTruck, FiShield, FiPercent } from 'react-icons/fi'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [flashSales, setFlashSales] = useState([])
  const [categories, setCategories] = useState([])

  // Sample data - Replace with API calls
  useEffect(() => {
    // Sample featured products
    setFeaturedProducts([
      {
        id: 1,
        name: 'AILYONS FK-0301 Stainless Steel 2.0L Electric Kettle',
        price: 490,
        originalPrice: 1399,
        discount: 65,
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=400',
        rating: 4.5,
        reviews: 6949,
        seller: 'UR-HOME(KENYA)'
      },
      {
        id: 2,
        name: 'Redmi Note 15 128GB RAM 6GB',
        price: 30399,
        originalPrice: 37000,
        discount: 18,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
        rating: 4.8,
        reviews: 2345,
        seller: 'Xiaomi Official'
      },
      {
        id: 3,
        name: 'MJAA™ Golden Smart Watch Series 8',
        price: 5000,
        originalPrice: 6700,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
        rating: 4.2,
        reviews: 1234,
        seller: 'MJAA Tech'
      },
      {
        id: 4,
        name: 'AILYONS SBS01 2.1CH Soundbar',
        price: 4099,
        originalPrice: 5099,
        discount: 19,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400',
        rating: 4.0,
        reviews: 856,
        seller: 'AILYONS Audio'
      }
    ])

    // Sample flash sales
    setFlashSales([
      {
        id: 1,
        name: 'Flash Deal: Electric Kettle',
        price: 299,
        originalPrice: 1199,
        discount: 75,
        image: 'https://images.unsplash.com/photo-1584374958186-3c15a277893c?w=400',
        timeLeft: '2h 15m'
      },
      {
        id: 2,
        name: 'Smart Watch Flash Sale',
        price: 392,
        originalPrice: 956,
        discount: 59,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
        timeLeft: '4h 30m'
      }
    ])

    // Sample categories
    setCategories([
      { name: 'Phones', icon: '📱', color: 'bg-blue-100' },
      { name: 'TVs', icon: '📺', color: 'bg-red-100' },
      { name: 'Laptops', icon: '💻', color: 'bg-green-100' },
      { name: 'Fashion', icon: '👗', color: 'bg-pink-100' },
      { name: 'Beauty', icon: '💄', color: 'bg-purple-100' },
      { name: 'Home', icon: '🏠', color: 'bg-yellow-100' },
      { name: 'Baby', icon: '👶', color: 'bg-blue-100' },
      { name: 'Sports', icon: '🏃', color: 'bg-orange-100' },
    ])
  }, [])

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-[300px] md:h-[400px]"
        >
          <SwiperSlide>
            <div className="relative h-full bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Big Brands, Best Prices</h2>
                <p className="text-lg md:text-xl mb-6">Shop the latest electronics, fashion & more</p>
                <Link href="/products" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full bg-gradient-to-r from-secondary to-purple-600 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Flash Sales</h2>
                <p className="text-lg md:text-xl mb-6">Up to 70% off on selected items</p>
                <Link href="/flash-sales" className="bg-white text-secondary px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                  View Deals
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Features */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <FiTruck className="text-2xl text-primary" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-xs text-gray-500">On orders over KSh 5,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiClock className="text-2xl text-primary" />
              <div>
                <p className="font-semibold">Express Delivery</p>
                <p className="text-xs text-gray-500">Same day in Nairobi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiShield className="text-2xl text-primary" />
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-xs text-gray-500">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiPercent className="text-2xl text-primary" />
              <div>
                <p className="font-semibold">Best Prices</p>
                <p className="text-xs text-gray-500">Price match guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
                className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition bg-gray-50 hover:bg-white"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-red-500">🔥 Flash Sales</h2>
            <Link href="/flash-sales" className="text-primary font-semibold hover:underline">
              See All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {flashSales.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    ⏱ {product.timeLeft}
                  </div>
                </div>
                <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                </div>
                <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">🔥 Top Selling Items</h2>
            <Link href="/products" className="text-primary font-semibold hover:underline">
              See All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-100 hover:shadow-lg transition p-4">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    ⭐ {product.rating} ({product.reviews})
                  </div>
                </div>
                <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">by {product.seller}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                </div>
                <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg">Best Prices</h3>
              <p className="text-sm text-gray-300">We offer competitive prices on all products</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-300">Get your orders delivered within 24-48 hours</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-lg">Secure Shopping</h3>
              <p className="text-sm text-gray-300">Your data and payments are always protected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
