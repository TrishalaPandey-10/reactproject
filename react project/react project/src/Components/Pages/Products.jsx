import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Products.css";
import products from './products.json'; // Ensure this path is correct

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Set all products from the JSON data
    setAllProducts(products);
  }, []);

  return (
    <div className="Container">
      <h2 className="Category_title">PRODUCT OVERVIEW</h2>
      <div className="Row">
        {allProducts.map((product) => (
          <div className="column" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="Card">
                <img src={product.image} alt={product.title} className="card_img" />
                <div className="card_body">
                  <h3 className="card_title">{product.title}</h3>
                  <p className="card_text">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
