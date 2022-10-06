import { createContext, useContext, useEffect, useState } from 'react';
import * as authApi from '../api/authApi';
import * as userApi from '../api/userApi';
import {
  addAccessItem,
  getAccessToken,
  removeAccessItem,
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        // console.log('load true');
        if (getAccessToken()) {
          await getUser();
        }
      } catch (err) {
        console.log(err);
      } finally {
        // console.log('load finish');

        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const getUser = async () => {
    const res = await userApi.getUser();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authApi.register(input);
    addAccessItem(res.data.token);
    await getUser();
  };

  const login = async (input) => {
    const res = await authApi.login(input);
    addAccessItem(res.data.token);
    await getUser();
    // setTimeout(() => getUser(), 2);
  };

  const logout = () => {
    removeAccessItem();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
