const url = "http://localhost:9005/api/product";

const getProducts = async (limite, inicio) => {
  try {
    const response = await fetch(url + `?limite=${limite}&desde=${inicio}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
