export const setItem = (token: string): void => {
  window.localStorage.setItem("accessToken", token);
};

export const getItem = (): string => {
  return window.localStorage.getItem("accessToken") || "";
};

export const removeItem = (): void => {
  window.localStorage.removeItem("accessToken");
};
