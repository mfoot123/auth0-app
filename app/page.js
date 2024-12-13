export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to My Secure App!</h1>
      <p>Customize your app by editing <code>app/page.js</code>.</p>
      <a href="/api/auth/login" style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>Login</a>
    </main>
  );
}