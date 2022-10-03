const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const addAccessItem = (token) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeAccessItem = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
