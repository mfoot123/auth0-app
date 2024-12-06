import { getSession } from '@auth0/nextjs-auth0';

export async function middleware(req) {
  const session = await getSession(req);
  const role = session?.user?.['https://your-app.com/roles'];

  const url = req.nextUrl.clone();

  if (!session) {
    url.pathname = '/api/auth/login';
    return Response.redirect(url);
  }

  // Restrict access based on roles
  if (url.pathname === '/admin' && role !== 'Admin') {
    url.pathname = '/unauthorized';
    return Response.redirect(url);
  }

  return Response.next();
}