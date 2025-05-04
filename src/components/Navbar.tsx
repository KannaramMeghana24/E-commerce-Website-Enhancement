
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-shop-blue">
            ShopSmart
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-shop-blue transition-colors">
              Home
            </Link>
            <Link to="/" className="text-gray-600 hover:text-shop-blue transition-colors">
              Shop
            </Link>
            <Link to="/" className="text-gray-600 hover:text-shop-blue transition-colors">
              Categories
            </Link>
            <Link to="/" className="text-gray-600 hover:text-shop-blue transition-colors">
              About
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <ShoppingCart className="h-6 w-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-shop-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600"
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2 animate-fade-in">
            <Link to="/" className="block py-2 text-gray-600 hover:text-shop-blue" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/" className="block py-2 text-gray-600 hover:text-shop-blue" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/" className="block py-2 text-gray-600 hover:text-shop-blue" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/" className="block py-2 text-gray-600 hover:text-shop-blue" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
