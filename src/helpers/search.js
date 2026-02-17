const url = "http://localhost:9005/api/search";

export const search = async (termino) => {
  try {
    const resp = await fetch(`${url}/${termino}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
