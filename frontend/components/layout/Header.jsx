'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { useCartStore } from '@/lib/store'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const cartItems = useCartStore((state) => state.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
  }

  const categories = [
    'Phones & Tablets',
    'TVs & Audio',
    'Home & Living',
    'Fashion',
    'Beauty & Health',
    'Computers',
    'Electronics',
    'Baby Products',
    'Gaming',
    'Automobile',
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-1 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between">
          <span>🔥 Free Delivery on orders over KSh 5,000</span>
          <span>📞 Call us: 0711 011 011</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              Shop<span className="text-secondary">Kenya</span>
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-primary text-white rounded-r-lg hover:bg-primary-dark"
              >
                <FiSearch size={20} />
              </button>
            </div>
          </form>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Account */}
            {isLoggedIn ? (
              <div className="relative group hidden sm:block">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary">
                  <FiUser size={22} />
                  <span className="text-sm hidden lg:inline">Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                  <Link href="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">Logout</button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-primary">
                <FiUser size={22} />
                <span className="text-sm hidden lg:inline">Login</span>
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart" className="relative">
              <FiShoppingCart size={24} className="text-gray-700 hover:text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-lg"
            >
              <FiSearch size={18} />
            </button>
          </div>
        </form>

        {/* Categories - Desktop */}
        <div className="hidden md:flex gap-6 mt-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="text-sm text-gray-600 hover:text-primary whitespace-nowrap"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {!isLoggedIn && (
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              )}
              <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
              <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
              <div className="border-t border-gray-200 pt-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              {isLoggedIn && (
                <button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
