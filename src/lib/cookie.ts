import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const cookieStorage = {
  getItem: (name: string) => (getCookie(name) as string) ?? null,
  setItem: (name: string, value: string) =>
    setCookie(name, value, { maxAge: 60 * 60 * 24 * 7 }),
  removeItem: (name: string) => deleteCookie(name),
};
