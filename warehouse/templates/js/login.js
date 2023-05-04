

const baseURL = "http://43.205.91.117:8000/api/user/login/";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const tokenPlugin = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};






