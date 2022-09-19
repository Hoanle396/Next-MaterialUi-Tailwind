import { useCallback, useState } from "react";

export const useToggle = (initialState?: boolean): [boolean, any, any] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(!!initialState);
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((prev) => !prev), []);
  return [state, toggle, setState];
};
