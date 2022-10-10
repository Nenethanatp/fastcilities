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
        if (getAccessToken()) {
          await getUser();
        }
      } catch (err) {
        console.log(err);
      } finally {
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
  };

  const logout = async () => {
    removeAccessItem();
    setUser(null);
  };

  const updateProfile = async (profile) => {
    const res = await userApi.updateUser(profile);
    setUser(res.data.user);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
