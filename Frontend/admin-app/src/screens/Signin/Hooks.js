import { useState } from "react";

const Hooks = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  // const [error, setError] = useState("");
  return { userCredentials, setUserCredentials };
};
export default Hooks;
