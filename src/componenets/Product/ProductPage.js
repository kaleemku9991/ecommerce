import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { CartContext } from '../../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { dispatch } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      loginWithRedirect({ redirectUri: window.location.origin + `/product/${id}` });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      history.push('/cart');
    }
  };

  if (!product) return <div>Loading...</div>;

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    productDetail: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '600px',
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
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '20px',
    },
    price: {
      fontSize: '20px',
      color: '#d32f2f',
      margin: '20px 0',
    },
    addButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#1976d2',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    addButtonHover: {
      backgroundColor: '#1565c0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.productDetail}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <h1 style={styles.title}>{product.title}</h1>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>${product.price}</p>
        <button onClick={handleAddToCart} style={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
