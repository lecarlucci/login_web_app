import React from 'react'
import { CheckCircle, LogOut } from 'lucide-react'

interface SuccessPageProps {
  onLogout: () => void
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onLogout }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Login Successful!</h1>
      <p className="text-gray-600 mb-6">Welcome to your account. You have successfully logged in.</p>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center mx-auto"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Logout
      </button>
    </div>
  )
}

export default SuccessPage