import React from 'react';

const OrderConfirmation = ({ shippingData, paymentData }) => {
  const handleConfirm = () => {
    // Handle order confirmation logic
    console.log('Order confirmed', { shippingData, paymentData });
  };

  return (
    <div className="order-confirmation">
      <h3>Order Confirmation</h3>
      <p>Address: {shippingData.address}</p>
      <p>City: {shippingData.city}</p>
      <p>Postal Code: {shippingData.postalCode}</p>
      <p>Card Number: {paymentData.cardNumber}</p>
      <p>Expiry Date: {paymentData.expiryDate}</p>
      <button onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
};

export default OrderConfirmation;
