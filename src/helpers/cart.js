const url = "http://localhost:9005/api/cart/";

const getCart = async () => {
  try {
    const resp = await fetch(url, {
      credentials: "include",
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCart };
