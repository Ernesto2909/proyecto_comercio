import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen (props){
    return <ul className="products">
    {
      data.products.map(producto=>
        <li>
      <div className="product">
      <Link to={'/products/'+ producto._id}>
      <img className="product-image" src={producto.imagen} alt="product" />
      
      </Link>
        
        <div className="product-name">
            <Link to={'/products/'+ producto._id}>{producto.nombre}</Link>
          
        </div>
        <div className="product-brand">{producto.marca}</div>
        <div className="product-price">${producto.precio}</div>
        <div className="product-rating">{producto.raiting} estrellas ({producto.numReviews})</div>
      </div>
    </li>
        
        )
    }

  </ul>
}

export default HomeScreen;
