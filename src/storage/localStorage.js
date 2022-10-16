const storage = window.localStorage;
export const getItem = (key) => {
  return JSON.parse(storage.getItem(key)) ?? null;
};

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};
