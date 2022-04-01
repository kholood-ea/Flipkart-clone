import { useState } from "react";

const Hooks = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastNmae: "",
  });

  // const [error, setError] = useState("");
  return { userInfo, setUserInfo };
};
export default Hooks;
