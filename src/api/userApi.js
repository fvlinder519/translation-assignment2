import { createHeaders } from "./indexApi";
const apiUrl = process.env.REACT_APP_API_URL;

//getting userdata
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);

    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
//creating and posting user to API
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not create user: " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const loginUser = async (username) => {
  const [error, user] = await checkForUser(username);

  if (error !== null) {
    return [error, null];
  }

  if (user.length > 0) {
    //user does not exist
    return [null, user.pop()];
  }
  return await createUser(username);
};
//getting user by id from API
export const findUserById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}?username=${userId}`);

    if (!response.ok) {
      throw new Error("Could not fetch user: " + userId);
    }
    const user = await response.JSON();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
