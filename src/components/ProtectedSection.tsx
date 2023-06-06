import { AUTH_ROLE } from '@/utils/constants';
import useAuth from '../hooks/useAuth';

interface IProp {
  role: AUTH_ROLE; // defined role can access the protected section
  children: JSX.Element;
}

const ProtectedSection = (props: IProp) => {
  const { role, children } = props;

  const { isAllowed } = useAuth({ allowedRole: role });

  if (!isAllowed) {
    return <></>;
  }

  return children;
};

export default ProtectedSection;
