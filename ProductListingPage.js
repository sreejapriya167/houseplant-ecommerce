// src/components/ProductListingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductListingPage.css';

const ProductListingPage = ({ products, addToCart }) => {
  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      <div className="plant-categories">
        {products.map((category, idx) => (
          <div key={idx} className="plant-category">
            <h3>{category.name}</h3>
            <div className="plants">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button onClick={() => addToCart(plant)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
