import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import "./Products.css";
import products from './products.json'; 

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [allProducts, setAllProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    setAllProducts(products);

    const electronicsProducts = products.filter(product => product.category === "electronics");
    const womensClothingProducts = products.filter(product => product.category === "women's clothing");
    const jeweleryProducts = products.filter(product => product.category === "jewelery");
    const mensClothingProducts = products.filter(product => product.category === "men's clothing");

    setElectronics(electronicsProducts);
    setWomensClothing(womensClothingProducts);
    setJewelery(jeweleryProducts);
    setMensClothing(mensClothingProducts);
  }, []);

  return (
    <div>
      <h2 className="Category_title">PRODUCT OVERVIEW</h2>
      <div className="Category_Container">
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('all')}>All Products</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("men's clothing")}>Men</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("women's clothing")}>Women</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('electronics')}>Electronics</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('jewelery')}>Jewelery</button>
        </div>
      </div>

      <div className="Container">
        <div className="Row">
          {selectedCategory === 'all' && allProducts.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'electronics' && electronics.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === "women's clothing" && womensClothing.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'jewelery' && jewelery.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === "men's clothing" && mensClothing.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
