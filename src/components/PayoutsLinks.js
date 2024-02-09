import React from 'react';

function PayoutLinks() {
  return (
    <div className="p-7">
      <h1 className="text-3xl font-semibold text-white">Payout Links</h1>
      <p className="text-gray-300 mt-3">
        Generate and manage payout links for your transactions.
      </p>
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">Your Payout Links</h2>
        <ul className="list-inside list-none">
          <li>
            <span className="text-[#B4D4FF]">January Payout</span>
            <a href="/" className="text-[#B4D4FF] hover:underline ml-2">
              View Payout Link
            </a>
          </li>
          <li>
            <span className="text-[#B4D4FF]">February Payout</span>
            <a href="/" className="text-[#B4D4FF] hover:underline ml-2">
              View Payout Link
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default PayoutLinks;
