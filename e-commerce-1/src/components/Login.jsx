import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
import { useSelector } from "react-redux";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  
const token = useSelector((state) => state.auth.token);
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
  const handlelogin = () => {
      //  console.log(2);
        dispatch(loginloading)
        axios({
          method: "post",
            url: "https://reqres.in/api/login",
          data: loginData
        }).then(res => {
          dispatch(sucessLogin(res.data.token))
           console.log(2);
        })
    }

  return (
    <div>
      <div className="div">
        {Object.keys(loginData).map((el) => (
          <TextField
            value={loginData[el]}
            onChange={ handlechange}
            name={el}
            id={el}
            label={el.toLocaleUpperCase()}
            variant="outlined"
          />
        ))}
      </div>

      <div className="button">
        <br />
        <Button
          onClick={ handlelogin}
          variant="contained"
          endIcon={<SendIcon />}
        >
          {token ? "log out" : "log in"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
