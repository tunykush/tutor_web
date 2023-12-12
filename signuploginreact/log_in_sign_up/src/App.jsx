import { useState } from 'react'
import LoginInPage from './LogInPage'
import SignUpPage from './SignUpPage'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container" id="container">
      {isLogin ? <div className="form-container sign-in">
          <form>
          <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button onClick={toggleForm}>Sign In</button>
          </form>
        </div> : <div className="form-container sign-up">
      <form>
      <h1>Create Account</h1>
                <div class="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button onClick={toggleForm}>Sign Up</button>
      </form>
    </div>}
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel ${isLogin ? 'toggle-left' : 'toggle-right'}`}>
            <h1>{isLogin ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
            <p>{isLogin ? 'Enter your personal details to use all site features' : 'Register with your personal details to use all site features'}</p>
            <button onClick={toggleForm} >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
