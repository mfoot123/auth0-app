import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function User() {
  return <h1>User Dashboard</h1>;
}

export default withPageAuthRequired(User);