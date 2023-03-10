import axios from "axios";
import {
    LoginParams,
}   from "../../Interfaces/Interfaces";

export function UserLogin(user: LoginParams) {
    return axios
      .post("http://localhost:8000/api/v1/accounts/token/login/", user)
      .then(async (response) => {
        localStorage.setItem("token", JSON.stringify(response.data.auth_token));
        console.log(
          "Login Success! Stored Token: ",
          JSON.parse(localStorage.getItem("token") || "{}")
        );
        return true;
      })
      .catch((error) => {
        console.log("Login Failed: " + error);
        return false;
      });
  }