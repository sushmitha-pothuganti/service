import { useState } from 'react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [step, setStep] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setStep(''); // Reset step when changing payment method
  };

  const handleProceed = () => {
    switch (paymentMethod) {
      case 'online':
        setStep('pay-now');
        break;
      case 'credit-card':
        setStep('add-card');
        break;
      case 'cash':
        setStep('place-order');
        break;
      default:
        alert('Please select a payment method.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Payment Options</h1>

      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/PhonePe_logo.svg/2560px-PhonePe_logo.svg.png" alt="PhonePe" className="h-12" />
            <span>PhonePe</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Google_Pay_logo.svg/2560px-Google_Pay_logo.svg.png" alt="GPay" className="h-12" />
            <span>GPay</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Paytm_logo.svg/2560px-Paytm_logo.svg.png" alt="Paytm" className="h-12" />
            <span>Paytm</span>
          </div>
        </div>

        <form className="space-y-4">
          <label className="block">
            <input type="radio" name="payment-method" value="online" checked={paymentMethod === 'online'} onChange={handlePaymentMethodChange} />
            <span className="ml-2">Online Payment</span>
          </label>
          <label className="block">
            <input type="radio" name="payment-method" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={handlePaymentMethodChange} />
            <span className="ml-2">Credit/Debit Card</span>
          </label>
          <label className="block">
            <input type="radio" name="payment-method" value="cash" checked={paymentMethod === 'cash'} onChange={handlePaymentMethodChange} />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </form>

        <div className="mt-6 text-center">
          <button onClick={handleProceed} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Proceed</button>
        </div>

        {step === 'pay-now' && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Pay Now</h2>
            <p>Please complete your payment through your selected online payment method.</p>
          </div>
        )}
        {step === 'add-card' && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Add Credit/Debit Card</h2>
            <form className="space-y-4">
              <label className="block">
                Card Number:
                <input type="text" className="w-full p-3 border border-gray-300 rounded mt-1" required />
              </label>
              <label className="block">
                Cardholder Name:
                <input type="text" className="w-full p-3 border border-gray-300 rounded mt-1" required />
              </label>
              <label className="block">
                Expiry Date:
                <input type="text" className="w-full p-3 border border-gray-300 rounded mt-1" required />
              </label>
              <label className="block">
                CVV:
                <input type="text" className="w-full p-3 border border-gray-300 rounded mt-1" required />
              </label>
              <div className="text-center">
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add Card</button>
              </div>
            </form>
          </div>
        )}
        {step === 'place-order' && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Place Order</h2>
            <p>Your order will be processed once you choose cash on delivery.</p>
            <div className="text-center mt-4">
              <button type="button" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Place Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
