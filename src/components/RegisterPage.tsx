import React, { useState } from 'react'
import { UserPlus } from 'lucide-react'

interface RegisterPageProps {
  onRegister: (username: string, password: string) => void
  onCancel: () => void
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, onCancel }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === confirmPassword) {
      onRegister(username, password)
    } else {
      alert("Passwords don't match")
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="flex items-center justify-center mb-6">
        <UserPlus className="text-green-500 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mb-4"
        >
          Register
        </button>
      </form>
      <div className="text-center">
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700 font-semibold"
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default RegisterPage