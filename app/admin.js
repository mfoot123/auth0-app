import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Admin() {
  return <h1>Admin Dashboard</h1>;
}

export default withPageAuthRequired(Admin);