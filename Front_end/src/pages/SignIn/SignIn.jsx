import { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const loginData = {
      email: username,
      password,
    };
    const result = await loginUser(loginData);

    if (result.success) {
      localStorage.setItem('token', result.token);
      console.log('Connexion réussie et token stocké:', result.token);
      navigate('/profile');
    } else {
      setError(result.error);
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* SHOULD BE THE BUTTON BELOW  */}
          <p>{error}</p>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
