import React, { useState } from 'react';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderConfirmation from './OrderConfirmation';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setStep(2);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    setStep(3);
  };

  return (
    <div className="checkout">
      {step === 1 && <ShippingForm onSubmit={handleShippingSubmit} />}
      {step === 2 && <PaymentForm onSubmit={handlePaymentSubmit} />}
      {step === 3 && <OrderConfirmation shippingData={shippingData} paymentData={paymentData} />}
    </div>
  );
};

export default CheckoutPage;
