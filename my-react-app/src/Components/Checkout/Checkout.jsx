import React from 'react'
import './Checkout.css'
import '../CartItems/CartItems'
const Checkout = () => {
  return (
    <div className="checkout-page">
    <h2>Billing Address</h2>
    <form>
      <label>
        Firstname:
        <input type="text" name="filename" required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastname" required />
      </label>
      <label>
        Address:
        <input type="text" name="address" required />
      </label>
      <label>
        Email Id:
        <input type="email" name="emailid" required />
      </label>
      <label>
        Country:
        <input type="text" name="country" required />
      </label>
      <label>
        State:
        <input type="text" name="state" required />
      </label>
      <label>
        Zip:
        <input type="text" name="zip" required />
      </label>
      <h3>Payment Methods</h3>
      <label>
        <input type="radio" name="payment" value="credit" />
        Credit Card
      </label>
      <label>
        <input type="radio" name="payment" value="debit" />
        Debit Card
      </label>
      <label>
        <input type="radio" name="payment" value="paypal" />
        Paypal
      </label>
      <h3>Credit Card Details</h3>
      <label>
        Credit Card Number:
        <input type="text" name="cardnumber" required />
      </label>
      <label>
        Name on Card:
        <input type="text" name="cardname" required />
      </label>
      <label>
        Expiration:
        <input type="text" name="expiration" required />
      </label>
      <label>
        CVV:
        <input type="text" name="cvv" required />
      </label>
      <button type="submit">Checkout</button>
    </form>
  </div>
     );
    };

export default Checkout