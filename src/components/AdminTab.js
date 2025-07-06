import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminTab = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === process.env.REACT_APP_ADMIN_USERNAME && 
        password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Username atau password salah');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h2>Login Admin</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-content">
      <h2>Halaman Admin</h2>
      <p>Selamat datang, {process.env.REACT_APP_ADMIN_USERNAME}!</p>
      <p>Ini adalah area terproteksi dengan data rahasia.</p>
      <p>Secret Key: {process.env.REACT_APP_ADMIN_SECRET_KEY}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminTab;