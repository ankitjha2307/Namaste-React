export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to EatGood</h2>
        <form className="login-form">
          <div>
            <label htmlFor="email" className="login-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
}