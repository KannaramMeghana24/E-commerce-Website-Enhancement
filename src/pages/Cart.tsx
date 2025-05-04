
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartItem from "@/components/CartItem";
import { ShoppingCart, ChevronRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, you would handle the checkout process here
    setTimeout(() => {
      navigate("/checkout");
    }, 500);
  };
  
  const shippingFee = items.length > 0 ? 10 : 0;
  const tax = items.length > 0 ? getCartTotal() * 0.08 : 0;
  const total = getCartTotal() + shippingFee + tax;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center">
            <ShoppingCart className="mr-2 h-6 w-6" />
            Shopping Cart
          </h1>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </div>
        
        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {items.map((item) => (
                  <CartItem 
                    key={item.product.id} 
                    product={item.product} 
                    quantity={item.quantity} 
                  />
                ))}
                
                <div className="flex justify-between mt-6">
                  <Button variant="ghost" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full py-6 bg-shop-blue hover:bg-shop-blue/90 flex items-center justify-center gap-2"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      Proceed to Checkout
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              className="bg-shop-blue hover:bg-shop-blue/90"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
