
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
  colors: string[];
  size?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Desk Lamp",
    price: 49.99,
    description: "A sleek, adjustable desk lamp with touch controls and multiple brightness levels.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Home Office",
    rating: 4.5,
    inStock: true,
    featured: true,
    colors: ["Black", "White", "Silver"],
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 199.99,
    description: "Comfortable office chair with lumbar support and adjustable height.",
    image: "https://images.unsplash.com/photo-1505657435435-8307e0e91355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Home Office",
    rating: 4.7,
    inStock: true,
    featured: false,
    colors: ["Black", "Gray", "Blue"],
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Noise-cancelling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    featured: true,
    colors: ["Black", "White", "Red"],
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 249.99,
    description: "GPS-enabled smartwatch with health monitoring and notifications.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
    category: "Electronics",
    rating: 4.6,
    inStock: true,
    featured: false,
    colors: ["Black", "Silver", "Rose Gold"],
  },
  {
    id: 5,
    name: "Cotton T-shirt",
    price: 24.99,
    description: "Soft, breathable cotton t-shirt in classic fit.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Clothing",
    rating: 4.3,
    inStock: true,
    featured: false,
    colors: ["White", "Black", "Navy"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Denim Jeans",
    price: 59.99,
    description: "Classic straight-leg jeans with a comfortable stretch.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    category: "Clothing",
    rating: 4.4,
    inStock: true,
    featured: true,
    colors: ["Blue", "Black", "Gray"],
    size: ["28", "30", "32", "34", "36"],
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 89.99,
    description: "Lightweight running shoes with responsive cushioning.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Footwear",
    rating: 4.7,
    inStock: true,
    featured: true,
    colors: ["Black/White", "Gray/Blue", "Red/Black"],
    size: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: 8,
    name: "Coffee Maker",
    price: 79.99,
    description: "Programmable coffee maker with 12-cup capacity.",
    image: "https://images.unsplash.com/photo-1517705567469-63ddb4a906cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
    category: "Kitchen",
    rating: 4.5,
    inStock: true,
    featured: false,
    colors: ["Black", "Silver", "White"],
  },
  {
    id: 9,
    name: "Ceramic Plant Pot",
    price: 19.99,
    description: "Stylish ceramic plant pot for indoor houseplants.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    category: "Home Decor",
    rating: 4.2,
    inStock: true,
    featured: false,
    colors: ["White", "Gray", "Terracotta"],
  },
  {
    id: 10,
    name: "Backpack",
    price: 49.99,
    description: "Durable backpack with laptop compartment and multiple pockets.",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Accessories",
    rating: 4.6,
    inStock: true,
    featured: true,
    colors: ["Black", "Navy", "Green"],
  },
  {
    id: 11,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model smartphone with high-resolution camera and fast processor.",
    image: "https://images.unsplash.com/photo-1570891836654-ef73948b8ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    featured: true,
    colors: ["Black", "Silver", "Gold"],
  },
  {
    id: 12,
    name: "Tablet",
    price: 349.99,
    description: "10-inch tablet with HD display and all-day battery life.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Electronics",
    rating: 4.5,
    inStock: false,
    featured: false,
    colors: ["Silver", "Space Gray"],
  },
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const colors = Array.from(
  new Set(products.flatMap(product => product.colors))
);
