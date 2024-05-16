import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './componenets/Product/HomePage';
import ProductPage from './componenets/Product/ProductPage';
import CartPage from './componenets/Cart/CartPage';
import CheckoutPage from './componenets/Checkout/CheckoutPage';
import LoginPage from './componenets/Auth/LoginPage';
import SignupPage from './componenets/Auth/SignupPage';
import { CartProvider } from './context/CartContext';
import Auth0ProviderWithHistory from './componenets/Auth/auth0-provider-with-history';

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <CartProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </CartProvider>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
