import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Placeholder login logic
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('kkAdminToken', 'placeholder_token');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. (Hint: use admin / admin)');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="text-center" style={{marginBottom: '30px'}}>
          <h2 style={{color: 'var(--primary)', marginBottom: '10px'}}>KK Tours Admin</h2>
          <p>Login to manage your website</p>
        </div>
        
        {error && <div className="alert alert-error">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '20px'}}>
            Login to Dashboard
          </button>
        </form>
        
        <div className="text-center" style={{marginTop: '20px'}}>
          <a href="/" style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>← Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
