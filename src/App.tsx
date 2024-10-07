import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import SuccessPage from './components/SuccessPage'
import RegisterPage from './components/RegisterPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleLogin = (username: string, password: string) => {
    // In a real application, you would validate the credentials here
    if (username && password) {
      setIsLoggedIn(true)
    }
  }

  const handleRegister = (username: string, password: string) => {
    // In a real application, you would handle the registration logic here
    console.log('Registered:', username, password)
    setShowRegister(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLoggedIn ? (
        <SuccessPage onLogout={handleLogout} />
      ) : showRegister ? (
        <RegisterPage onRegister={handleRegister} onCancel={() => setShowRegister(false)} />
      ) : (
        <LoginPage onLogin={handleLogin} onRegisterClick={() => setShowRegister(true)} />
      )}
    </div>
  )
}

export default App