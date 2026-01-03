import { Metadata } from "./Metadata";

export function Provider({ children }) {
  return (
    <>
      <Metadata />
      {children}
    </>
  );
}
