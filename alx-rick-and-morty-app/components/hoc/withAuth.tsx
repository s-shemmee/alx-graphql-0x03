
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type WithAuthProps = Record<string, unknown>;

const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = false; // Replace with actual authentication check
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ComponentWithAuth;
};

export default withAuth;
