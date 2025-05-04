
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
    }, 300);
  };

  return (
    <div className={`flex gap-4 py-4 border-b transition-all ${isRemoving ? 'opacity-0 transform translate-x-4' : 'opacity-100'}`}>
      <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.name}</h3>
          <span className="font-bold text-shop-blue">${(product.price * quantity).toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={handleDecrement}
              disabled={quantity === 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="mx-3 w-6 text-center">{quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
