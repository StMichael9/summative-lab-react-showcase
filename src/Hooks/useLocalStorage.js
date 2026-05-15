import { useState, useEffect } from "react";

export default useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
    } catch (e) {
      console.error("error", e);
    }
  });
};
