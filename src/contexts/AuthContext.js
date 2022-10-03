import { createContext, useContext, useEffect, useState } from 'react';
import * as authApi from '../api/authApi';
import * as userApi from '../api/userApi';
import { addAccessItem, getAccessToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          getUser();
        }
      } catch (err) {
        console.log(err);
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

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
