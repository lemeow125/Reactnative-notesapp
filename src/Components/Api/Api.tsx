import axios from "axios";
import {
  ActivationParams,
  UpdateNoteParams,
  AddNoteParams,
  LoginParams,
  RegistrationParams,
} from "../../Interfaces/Interfaces";

// Note APIs

const instance = axios.create({
  baseURL: "https://keannu126.pythonanywhere.com",
});

export function GetNotes() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .get("api/v1/notes/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function GetNote(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .get("api/v1/notes/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function UpdateNote(note: UpdateNoteParams) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .patch("api/v1/notes/" + note.id + "/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error updating note", error);
      return error;
    });
}

export function AddNote(note: AddNoteParams) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .post("api/v1/notes/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error adding note", error);
      return error;
    });
}

export function DeleteNote(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .delete("api/v1/notes/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .catch((error) => {
      console.log("Error deleting note", error);
      return error;
    });
}

// User APIs

export function UserRegister(register: RegistrationParams) {
  return instance
    .post("api/v1/accounts/users/", register)
    .then(async (response) => {
      console.log(response.data);
      return true;
    })
    .catch((error) => {
      console.log("Registration failed: " + error);
      return false;
    });
}

export function UserLogin(user: LoginParams) {
  return instance
    .post("api/v1/accounts/token/login/", user)
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

export function UserInfo() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return instance
    .get("api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function UserActivate(activation: ActivationParams) {
  return instance
    .post("api/v1/accounts/users/activation/", activation)
    .then(async (response) => {
      console.log("Activation Success");
      return true;
    })
    .catch((error) => {
      console.log("Activation failed: " + error);
      return false;
    });
}
