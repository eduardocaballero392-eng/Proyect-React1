import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    if(username === "pan" && password === "1234"){
      alert("✅ Login exitoso");
    } else {
      alert("❌ Usuario o contraseña incorrectos");
    }
    
  };
  return <Login onLogin={handleLogin} />;
};

export default App;
