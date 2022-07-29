import React, { useContext } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
//   const { token, handleLogin, setToken } = useContext(AuthContext);
//   const handleAuth = (details) => {
//     token ? setToken(null) : handleLogin(details);
//   };

  return (
    <div>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        id="outlined-basic"
        label="pass"
        variant="outlined"
      />
      <br />
      <div className="button">
        <br />
        <Button
        //   onClick={() => handleAuth({ email, password: pass })}
          variant="contained"
          endIcon={<SendIcon />}
              >
                  Login
          {/* {token ? "log out" : "log in"} */}
        </Button>
      </div>
    </div>
  );
};

export default Login;
