import React from 'react'

function Home() {
  return (
    
    <div className="p-7 ">
         <h1 className="text-3xl font-semibold text-white">Welcome to Your Payment Web App</h1>
      <p className="text-gray-300 mt-3">
        Explore various features and functionalities related to payments.
      </p>

      
      <div className="mt-5">
        <h2 className="text-lg font-medium mb-2 text-gray-200">Quick Links</h2>
        <ul className="list-inside list-none">
          <li>
            <a href="/" className="text-[#B4D4FF] hover:underline">
              View Transactions
            </a>
          </li>
          <li>
            <a href="/" className="text-[#B4D4FF] hover:underline">
              Make a Payment
            </a>
          </li>
        </ul>
      </div>

      
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">Featured Services</h2>
        <div className="grid grid-cols-2 gap-4">
         
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2 ">Online Payments</h3>
            <p className="text-gray-600">
              Securely make online payments with our easy-to-use platform.
            </p>
          </div>

         
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
            <p className="text-gray-600">
              Track and manage your transaction history effortlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2 text-gray-100">News and Updates</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">
            Stay tuned for the latest news and updates related to our payment services.
          </p>
        </div>
      </div>
    </div>
    
    
  )
}

export default Home