const url = "http://localhost:9005/api/auth/";

//función para login
const logIn = async (email, password) => {
  const response = await fetch(url + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return data;
};

export { logIn };
