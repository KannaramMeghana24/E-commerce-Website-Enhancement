
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.size ? product.size[0] : "");
  
  const similarProducts = products
    .filter(p => p.id !== product?.id && p.category === product?.category)
    .slice(0, 4);
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")}>Back to Homepage</Button>
        </div>
      </>
    );
  }
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <button onClick={() => navigate("/")} className="hover:text-shop-blue">
            Home
          </button>
          <ChevronRight className="h-4 w-4 mx-2" />
          <button onClick={() => navigate("/")} className="hover:text-shop-blue">
            {product.category}
          </button>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>
        
        {/* Product details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product image */}
            <div className="md:w-1/2 bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Product info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                <p className="text-3xl font-bold text-shop-blue mb-6">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                {/* Stock status */}
                <div className="mb-6">
                  <span 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.inStock 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                
                {/* Color selection */}
                {product.colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <Button
                          key={color}
                          variant={selectedColor === color ? "default" : "outline"}
                          className={`rounded-md px-3 py-1 text-sm ${selectedColor === color ? "bg-shop-blue text-white" : ""}`}
                          onClick={() => setSelectedColor(color)}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Size selection */}
                {product.size && product.size.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.size.map((size) => (
                        <Button
                          key={size}
                          variant={selectedSize === size ? "default" : "outline"}
                          className={`rounded-md w-10 h-10 text-sm ${selectedSize === size ? "bg-shop-blue text-white" : ""}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity selector */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10 rounded"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="w-16 text-center font-medium">
                      {quantity}
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-10 w-10 rounded"
                      onClick={handleIncrement}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Add to cart button */}
                <Button
                  className="w-full py-6 mb-4 bg-shop-blue hover:bg-shop-blue/90 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
