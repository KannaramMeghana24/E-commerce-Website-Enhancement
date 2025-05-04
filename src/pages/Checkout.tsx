
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import { Check, ChevronLeft, CreditCard } from "lucide-react";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  
  const shippingFee = 10;
  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + shippingFee + tax;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      
      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase!",
        duration: 5000,
      });
      
      navigate("/");
    }, 2000);
  };
  
  // Redirect to cart page if cart is empty
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      </>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => navigate("/cart")} className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Customer and payment info */}
            <div className="lg:w-2/3 space-y-6">
              {/* Contact info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Shipping info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formState.city}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formState.zipCode}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formState.country}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </h2>
                <div className="mb-4">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formState.cardName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formState.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <Input
                      id="expiration"
                      name="expiration"
                      value={formState.expiration}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      value={formState.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                      className="mt-1"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                {/* Products */}
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0 mr-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm line-clamp-1">{item.product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                {/* Pricing */}
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
                  type="submit"
                  className="w-full py-6 bg-shop-blue hover:bg-shop-blue/90 flex items-center justify-center gap-2"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Complete Order
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
