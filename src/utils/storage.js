const validateKey = (key) => {
  if (!key || typeof key !== "string") {
    throw new Error("Invalid storage key provided");
  }
};

export const storageSave = (key, value) => {
  if (!key || typeof key !== "string") {
    throw new Error("storageSave: Invalid storage key provided");
  }
  if (!value) {
    validateKey(key);
  }
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
  validateKey(key);

  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const storageRemove = (key) => {
  validateKey(key);
  sessionStorage.removeItem(key);
};
