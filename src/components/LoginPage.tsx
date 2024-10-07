import React, { useState } from 'react'
import { LogIn } from 'lucide-react'

interface LoginPageProps {
  onLogin: (username: string, password: string) => void
  onRegisterClick: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onRegisterClick }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="flex items-center justify-center mb-6">
        <LogIn className="text-blue-500 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
          Log In
        </button>
      </form>
      <div className="text-center">
        <button
          onClick={onRegisterClick}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Register New User
        </button>
      </div>
    </div>
  )
}

export default LoginPage