import { Navigate, IndexRouteProps, LayoutRouteProps, PathRouteProps } from 'react-router-dom';

import { AUTH_ROLE, ROUTES_URL } from '@/utils/constants';
import useAuth from '@/hooks/useAuth';

interface IProp {
  role: AUTH_ROLE; // defined role can access the protected route\
  children: JSX.Element,
}

const ProtectedRoute = (props: IProp & (PathRouteProps | LayoutRouteProps | IndexRouteProps)) => {
  const { role, children } = props;

  const { isAllowed } = useAuth({ allowedRole: role });

  if (!isAllowed) {
    return <Navigate to={ROUTES_URL.ROOT} />;
  }

  return children;
}

export default ProtectedRoute;
