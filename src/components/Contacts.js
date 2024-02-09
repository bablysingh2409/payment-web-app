import React from 'react';

function Contacts() {
  return (
    <div className="p-7">
      <h1 className="text-3xl font-semibold text-white">Contacts</h1>
      <p className="text-gray-300 mt-3">
        Manage your contacts efficiently.
      </p>

    
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">Your Contacts</h2>
        <ul className="list-inside list-none">
          <li>
            <span className="text-[#B4D4FF]">John Doe</span>
            <p className="text-gray-400 ml-2">john.doe@example.com</p>
          </li>
          <li>
            <span className="text-[#B4D4FF]">Jane Smith</span>
            <p className="text-gray-400 ml-2">jane.smith@example.com</p>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
