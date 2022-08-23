export const storageSave = (key, value) => {
  if (!key) {
    throw new Error("storageSave: No storage key provided");
  }
  if (!value) {
    throw new Error("storageSave: No storage value provided for " + key);
  }
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const storageRemove = (key) => {
  sessionStorage.removeItem(key);
};
