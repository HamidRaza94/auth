import { useState } from 'react';
import './App.css';
import { actions } from './redux/reducer';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ROLE } from './utils/constants';
import ProtectedSection from './components/ProtectedSection';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [role, setRole] = useState(AUTH_ROLE.ADMIN);

  const handleChange = (value: any) => {
    dispatch(actions.addUser({ ...user, userRoles: [value] }));
    setRole(value);
  };

  return (
    <>
      <label htmlFor="roles">Select User Role:</label>{' '}

      <select name="roles" id="roles" value={role} onChange={(e) => handleChange(e.target.value)}>
        <option value={AUTH_ROLE.ADMIN}>Admin Role</option>
        <option value={AUTH_ROLE.MANAGER}>Manager Role</option>
        <option value={AUTH_ROLE.USER}>User Role</option>
        <option value={AUTH_ROLE.READ_ONLY}>Read Only Role</option>
      </select>

      <ProtectedSection role={AUTH_ROLE.ADMIN}>
        <p>You are admin</p>
      </ProtectedSection>

      <ProtectedSection role={AUTH_ROLE.MANAGER}>
        <p>You are manager</p>
      </ProtectedSection>

      <ProtectedSection role={AUTH_ROLE.USER}>
        <p>You are user</p>
      </ProtectedSection>

      <ProtectedSection role={AUTH_ROLE.READ_ONLY}>
        <p>You are read only</p>
      </ProtectedSection>
    </>
  );
}

export default App;
