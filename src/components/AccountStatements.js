import React from 'react'

function AccountStatements() {
  return (
    <div className="p-7">
    <h1 className="text-3xl font-semibold text-white">Account Statements</h1>
    <p className="text-gray-300 mt-3">
      View and manage your account statements with ease.
    </p>
    <div className="mt-8">
      <h2 className="text-lg font-medium mb-2 text-gray-100">Recent Statements</h2>
      <ul className="list-inside list-none">
        <li>
          <span className="text-[#B4D4FF]">January 2024</span>
          <a href="/" className="text-[#B4D4FF] hover:underline ml-2">
            View Statement
          </a>
        </li>
        <li>
          <span className="text-[#B4D4FF]">December 2023</span>
          <a href="/" className="text-[#B4D4FF] hover:underline ml-2">
            View Statement
          </a>
        </li>
        <li>
          <span className="text-[#B4D4FF]">November 2023</span>
          <a href="/" className="text-[#B4D4FF] hover:underline ml-2">
            View Statement
          </a>
        </li>
      </ul>
    </div>
  </div>

  )
}

export default AccountStatements