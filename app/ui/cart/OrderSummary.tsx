'use client';
import React, { useEffect, useState } from 'react';
import {
  calculateALV,
  getTotalCartAmount,
  getTotalCartItems,
} from '@/app/lib/actions';
import {
  calculateDeliveryFee,
  isPostalCodeInDeliveryRange,
} from '@/app/lib/fee';
import { DeliveryFee, ProductData } from '@/app/lib/definitions';
import DeliveyFeeSection from './DeliveryFeeSection';
import { findCityFromPostalCode } from '@/app/lib/fee';
import { useDebouncedCallback } from 'use-debounce';

const initialState = {
  totalItems: 0,
  totalAmount: 0,
  postalCode: '',
};

function OrderSummary({ cartItems }: { cartItems: ProductData[] }) {
  const [inputValues, setInputValues] = useState(initialState);
  const [deliveryFees, setDeliveryFees] = useState<DeliveryFee>();
  const ALV = 0.14;

  useEffect(() => {
    setInputValues({
      ...inputValues,
      totalItems: getTotalCartItems(cartItems),
      totalAmount: getTotalCartAmount(cartItems),
    });
  }, [cartItems]);

  useEffect(() => {
    const createNewDeliveryFee = async () => {
      const newDeliveryFee = await calculateDeliveryFee(
        inputValues.totalAmount,
        inputValues.postalCode
      );
      setDeliveryFees({
        ...newDeliveryFee,
        rushHourCharged: newDeliveryFee.rushHourCharged || false,
      });
    };
    createNewDeliveryFee();
  }, [inputValues]);

  const handleDebouncedInput = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
    },
    1000
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    handleDebouncedInput(e);
  };

  const renderDeliveryFeeSection = () => {
    if (inputValues.postalCode.length < 5) {
      return (
        <p className='text-center bg-slate-100 text-slate-700 p-2'>
          Enter a valid postal code
          <br />
          to calculate a delivery fee.
        </p>
      );
    } else if (
      deliveryFees &&
      isPostalCodeInDeliveryRange(inputValues.postalCode)
    ) {
      return <DeliveyFeeSection deliveryFees={deliveryFees} />;
    } else
      return (
        <p className='text-center bg-orange-100 text-orange-600 p-2'>
          Either postal code isn&apos;t valid or,
          <br /> outside delivery area.
        </p>
      );
  };

  return (
    <aside className='grow sticky top-28'>
      <div className='flex justify-between items-center gap-2'>
        <h3 className='font-bold text-slate-700'>Total Order Amount</h3>
        <p data-test-id='cartValue'>{inputValues.totalAmount.toFixed(2)} €</p>
      </div>
      <div className='flex justify-between items-center text-sm gap-2 text-slate-500'>
        <h3>(Incl. ALV {Math.floor(ALV * 100)}%)</h3>
        <p>({calculateALV(inputValues.totalAmount, ALV)} €)</p>
      </div>

      <div className='flex justify-between items-center gap-2 mt-6'>
        <h3 className='font-bold text-slate-700'>Total Order</h3>
        <p data-test-id='quantity'>{inputValues.totalItems} items</p>
      </div>
      <div className='mt-6 pb-6 border-b'>
        <form>
          <div className='flex justify-between items-center gap-2'>
            <label className='font-bold text-slate-700' htmlFor='postalCode'>
              Postal Code
              <span className='block text-sm text-slate-500 font-normal'>
                We deliver only inside Helsinki, Vantaa and Espoo.
              </span>
            </label>

            <div className='relative'>
              <input
                className='p-2 border bg-sky-200 rounded-md w-48'
                type='number'
                name='postalCode'
                id='postalCode'
                inputMode='numeric'
                pattern='[0-9]*'
                maxLength={5}
                onChange={(e) => handleInputChange(e)}
              />
              <p className='absolute top-[6px] right-4 capitalize text-right text-slate-500 text-sm mt-1'>
                {findCityFromPostalCode(inputValues.postalCode)}
              </p>
            </div>
          </div>
        </form>
      </div>
      {renderDeliveryFeeSection()}
    </aside>
  );
}

export default OrderSummary;
