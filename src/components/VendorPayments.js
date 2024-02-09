import React from 'react';

function VendorPayments() {
  return (
    <div className="p-7">
      <h1 className="text-3xl font-semibold text-white">Vendor Payments</h1>
      <p className="text-gray-300 mt-3">
        Manage payments to your vendors efficiently.
      </p>
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">Recent Payments</h2>
        <ul className="list-inside list-none">
          <li>
            <span className="text-[#B4D4FF]">ABC Suppliers</span>
            <p className="text-gray-400 ml-2">Payment of $500 on February 10, 2024</p>
          </li>
          <li>
            <span className="text-[#B4D4FF]">XYZ Services</span>
            <p className="text-gray-400 ml-2">Payment of $750 on January 25, 2024</p>
          </li>
        
        </ul>
      </div>
    </div>
  );
}

export default VendorPayments;
