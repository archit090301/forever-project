import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full p-6 border rounded-lg shadow-md bg-white">
      {/* Section title */}
      <div className="text-2xl mb-6">
        <Title text1="CART" text2="TOTAL" />
      </div>

      {/* Cart breakdown */}
      <div className="flex flex-col gap-3 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />

        {/* Delivery */}
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />

        {/* Total */}
        <div className="flex justify-between font-medium text-lg">
          <p>Total</p>
          <p>{currency}{getCartAmount() === 0? 0: getCartAmount()+delivery_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
