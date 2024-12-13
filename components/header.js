import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/user">User Dashboard</Link> | <Link href="/admin">Admin Dashboard</Link>
      </nav>
    </header>
  );
}