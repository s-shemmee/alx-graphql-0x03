import React from 'react';
import withAuth from '@/components/hoc/withAuth';

const Dashboard: React.FC = () => {
  return <h1>Protected Dashboard</h1>;
};

export default withAuth(Dashboard);
