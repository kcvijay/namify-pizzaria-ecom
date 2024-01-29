import { DeliveryFee } from '@/app/lib/definitions';

const DeliveyFeeSection = ({
  deliveryFees,
}: {
  deliveryFees: DeliveryFee | null;
}) => {
  return (
    <div>
      <div className='flex justify-between items-end text-orange-500 gap-2 mt-6 text-sm'></div>

      <div className='flex justify-between items-center text-orange-500 gap-2 mt-3 text-sm'>
        <h3>Total Delivery Fee</h3>
        <p data-test-id='deliveryFee'>
          {deliveryFees
            ? deliveryFees.totalDeliveryFee?.toFixed(2) + ' €'
            : '--'}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 mt-6 font-bold'>
        <h3 className='font-bold text-slate-700'>
          Total to Pay
          {deliveryFees?.rushHourCharged && (
            <span className='block text-gray-500 text-[14px] font-normal'>
              Rush hour charged (+ 1.99 €)
            </span>
          )}
        </h3>
        <p data-test-id='totalToPay'>
          {deliveryFees?.totalToPay?.toFixed(2)} €
        </p>
      </div>
      <div className='flex justify-end mt-6'>
        <button
          className='bg-sky-600 px-4 py-2 text-white rounded-md hover:bg-sky-700'
          disabled={!deliveryFees}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default DeliveyFeeSection;
