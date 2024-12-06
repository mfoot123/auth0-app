import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
  const session = getSession(req, res);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const roles = session.user['https://your-app.com/roles'];
  res.status(200).json({ roles });
}