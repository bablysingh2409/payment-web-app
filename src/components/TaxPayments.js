import React from 'react';

function TaxPayments() {
  return (
    <div className="p-7">
      <h1 className="text-3xl font-semibold text-white">Tax Payments</h1>
      <p className="text-gray-300 mt-3">
        Manage your tax payments with ease.
      </p>

      
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">Upcoming Payments</h2>
        <ul className="list-inside list-none">
          <li>
            <span className="text-[#B4D4FF]">Income Tax</span>
            <p className="text-gray-400 ml-2">Due on March 15, 2024</p>
          </li>
          <li>
            <span className="text-[#B4D4FF]">Property Tax</span>
            <p className="text-gray-400 ml-2">Due on April 30, 2024</p>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default TaxPayments;
