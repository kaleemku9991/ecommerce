import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '20px',
    },
    product: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      transition: '0.3s',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    description: {
      fontSize: '14px',
      color: '#555',
    },
    price: {
      fontSize: '16px',
      color: '#d32f2f',
      margin: '10px 0',
    },
    link: {
      textDecoration: 'none',
      color: '#1976d2',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      {products.map(product => (
        <div key={product.id} style={styles.product}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.description}>{product.description.substring(0, 60)}...</p>
          <p style={styles.price}>${product.price}</p>
          <Link to={`/product/${product.id}`} style={styles.link}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
