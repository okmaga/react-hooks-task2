import { useState, useEffect } from "react";

export function useLocalStorage(tokenKey) {
  const [token, setToken] = useState();

  useEffect(() => {
    if (tokenKey) {
      const savedTokenValue = localStorage.getItem(tokenKey);
      setToken(savedTokenValue);
    }
  }, [tokenKey]);

  function setItem(tokenValue) {
    localStorage.setItem(tokenKey, tokenValue);
    setToken(tokenValue);
  }

  function removeItem() {
    localStorage.removeItem(tokenKey);
    setToken();
  }

  return [token, { setItem, removeItem }];
}
