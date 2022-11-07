import { useState } from "react";
import { UserContext } from "./UserContex";

// const user = {
//   id: 123,
//   name: "David",
//   email: "dpmeta @gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <>
      {/* <UserContext.Provider value={{ hola: "Mundo", user: user }}> */}
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
