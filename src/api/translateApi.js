import { createHeaders } from "./indexApi";
const apiUrl = process.env.REACT_APP_API_URL;

export const addTranslation = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH", //updating a record
      headers: createHeaders(),
      body: JSON.stringify({
        username: user.username,
        translations: [...user.translations, translation],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not add translation to user");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
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
export const translationHistoryDelete = async (id) => {
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
