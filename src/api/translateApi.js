import { createHeaders } from "./indexApi";
const apiUrl = process.env.REACT_APP_API_URL;

export const postTranslation = async (text) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    });
    return response.json;
  } catch (error) {
    console.log(error);
  }
};

export const getTranslation = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTranslationWithId = async (id, limit = 0) => {
  try {
    const url =
      apiUrl + "?poster_id=" + id + (limit > 0 ? "&_limit=" + limit : "");
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTranslation = async (id) => {
  try {
    const response = await fetch(apiUrl + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json;
  } catch (error) {
    console.log(error);
  }
};
