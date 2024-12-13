export default function Home() {
    return (
      <main className="login-page">
        <div className="login-container">
          <h1>Welcome to My Secure App!</h1>
          <p>Please log in to continue.</p>
          <a href="/api/auth/login" className="login-button">Login</a>
        </div>
      </main>
    );
  }