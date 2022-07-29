import React, { useContext } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const dispatch = useDispatch();
    const [loginData, setloginData] = useState({
        email: "",
        password:""
    })
//   const handleAuth = (details) => {
//     token ? setToken(null) : handleLogin(details);
//   };
    const handlechange = (e) => {
        const { name, value } = e.target;
        setloginData(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const handlelogin = (loginData) => {
        dispatch(loginloading)
        axios({
          method: "post",
            url: "https://reqres.in/api/login",
          data: loginData
        }).then(res => {
            dispatch(sucessLogin(res.data.token))
        })
    }

  return (
    <div>
      {Object.keys(loginData).map((el) => (
        <TextField
          value={loginData(el)}
          onChange={handlechange}
          name={el}
          id={el}
          label="Email"
          variant="outlined"
        />
      ))}

      <div className="button">
        <br />
        <Button
            onClick={handlelogin}
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
