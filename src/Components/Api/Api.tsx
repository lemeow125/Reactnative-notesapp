import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export async function GetNotes() {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .get("/api/v1/notes/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function GetPublicNotes() {
  return instance.get("/api/v1/public_notes/").then((response) => {
    return response.data;
  });
}

export async function GetNote(id: number) {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .get("/api/v1/notes/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export async function UpdateNote(note: UpdateNoteParams) {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .patch("/api/v1/notes/" + note.id + "/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function AddNote(note: AddNoteParams) {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .post("/api/v1/notes/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function DeleteNote(id: number) {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .delete("/api/v1/notes/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .catch((error) => {
      return error;
    });
}

// User APIs

export function UserRegister(register: RegistrationParams) {
  return instance
    .post("/api/v1/accounts/users/", register)
    .then(async (response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

export function UserLogin(user: LoginParams) {
  return instance
    .post("/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      AsyncStorage.setItem("token", JSON.stringify(response.data.auth_token));
      return true;
    })
    .catch((error) => {
      console.log("Login Failed: " + error);
      return false;
    });
}

export async function UserInfo() {
  const token = JSON.parse(await AsyncStorage.getItem("token") || "{}");
  return instance
    .get("/api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function UserActivate(activation: ActivationParams) {
  return instance
    .post("/api/v1/accounts/users/activation/", activation)
    .then(async (response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}
