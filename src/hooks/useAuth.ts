import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { AUTH_ROLE } from '../utils/constants';

interface IAuthProp {
  allowedRole?: AUTH_ROLE;
}

const mapping: any = {
  [AUTH_ROLE.ADMIN]: [AUTH_ROLE.ADMIN, AUTH_ROLE.MANAGER, AUTH_ROLE.USER, AUTH_ROLE.READ_ONLY],
  [AUTH_ROLE.MANAGER]: [AUTH_ROLE.MANAGER, AUTH_ROLE.USER, AUTH_ROLE.READ_ONLY],
  [AUTH_ROLE.USER]: [AUTH_ROLE.USER, AUTH_ROLE.READ_ONLY],
  [AUTH_ROLE.READ_ONLY]: [AUTH_ROLE.READ_ONLY],
}

const useAuth = ({ allowedRole }: IAuthProp = {}) => {
  const user: any = useSelector((state: any) => state.user);

  const isAllowed = useMemo(() => {
    if (!allowedRole) {
      return false;
    }

    if (user?.userRoles?.[0]) {
      const userRoles = mapping[user.userRoles[0]];
      return userRoles.includes(allowedRole);
    }

    if (user?.userId) {
      return allowedRole === AUTH_ROLE.READ_ONLY;
    }

    return false;
  }, [user]);

  return { user, isAllowed };
};

export default useAuth;
