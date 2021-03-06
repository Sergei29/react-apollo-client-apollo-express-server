// NOTE: this example keeps the access token in LocalStorage just because it's simpler
// but in a real application you may want to use cookies instead for better security

const accessTokenKey = "accessToken";

export const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey);
};

export const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:9000/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(accessTokenKey, token);
  }
  return response.ok;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem(accessTokenKey);
};

export const logout = () => {
  localStorage.removeItem(accessTokenKey);
};
