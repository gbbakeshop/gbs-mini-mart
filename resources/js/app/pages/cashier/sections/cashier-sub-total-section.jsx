import React from 'react'
import { useSelector } from 'react-redux';

export default function CashierSubTotalSection() {

  const { payment, cart } = useSelector((state) => state.cashier);

  return (
    <div>
      <dl className="divide-y divide-gray-900 px-4">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Item(s)</dt>
          <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 font-black">{cart.reduce((acc, obj) => acc + obj.quantity, 0)}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Subtotal:</dt>
          <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 font-black">₱ {payment.subtotal}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Discount:</dt>
          <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 font-black">{(payment.discount * 100)}%</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Total:</dt>
          <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 font-black">₱ {payment.total}</dd>
        </div>
      </dl>
    </div>
  )
}
