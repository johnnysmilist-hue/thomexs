import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">ShopKenya</h3>
            <p className="text-gray-300 text-sm mb-4">
              Kenya's leading online shopping platform. We offer the best prices on electronics, fashion, home appliances, and more.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-primary">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-primary">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/returns" className="text-gray-300 hover:text-primary">Returns Policy</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-primary">Shipping Info</Link></li>
              <li><Link href="/track-order" className="text-gray-300 hover:text-primary">Track Order</Link></li>
              <li><Link href="/sell" className="text-gray-300 hover:text-primary">Sell on ShopKenya</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FiPhone />
                <span>0711 011 011</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FiMail />
                <span>info@shopkenya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} ShopKenya. All rights reserved. Made with ❤️ in Kenya
        </div>
      </div>
    </footer>
  )
}
