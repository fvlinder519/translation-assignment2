import { createHeaders } from "./indexApi";
const apiUrl = process.env.REACT_APP_API_URL;

//updating the body of the empty translations with content
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

//updating translation body to = []
export const translationHistoryDelete = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update/delete translationa");
    }
    const result = response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
