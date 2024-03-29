import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#002d4d",
    position: "absolute",
  },
  text_white: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button_generic: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    margin: 8,
    padding: 8,
    borderRadius: 16,
  },
  flex_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flex_column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  inputView: {
    backgroundColor: "black",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    color: "white",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },
  forgot_button: {
    fontWeight: "bold",
    color: "white",
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  registerbtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "orange",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  registertext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    marginTop: 30,
    marginLeft: 22,
    height: 500,
    width: 350,
    borderRadius: 25,
    backgroundColor: "#0087e4",
    alignItems: "center",
    justifyContent: "center",
  },
  loginlabel: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
    color: "white",
  },
  box: {
    width: "100%",
    height: 200,
  },
  userinfocont: {
    marginTop: 10,
    marginLeft: 50,
    height: 80,
    width: 300,
    borderRadius: 25,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  userlabel: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    color: "white",
  },
  addnote: {
    marginLeft: 180,
    width: "10%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  addtext: {
    fontSize: 20,
    color: "white",
  },
  addnotescont: {
    marginTop: 20,
    marginLeft: 20,
    height: 200,
    width: 350,
    backgroundColor: "blue",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  no: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    alignItems: "center",
  },
  typehere: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "75%",
    height: 300,
    marginTop: 20,
  },
  typeinput: {
    color: "white",
    marginBottom: 16,
    marginLeft: 5,
    minHeight: 128,
    maxHeight: 768,
  },
  title: {
    color: "white",
    flex: 1,
    marginLeft: 5,
  },
  tle: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "80%",
    height: 40,
    marginTop: 20,
  },
  addnotecont: {
    marginTop: 30,
    marginLeft: 22,
    paddingBottom: 30,
    minHeight: 500,
    width: 350,
    borderRadius: 25,
    backgroundColor: "#001018",
    alignItems: "center",
    justifyContent: "center",
  },
  savebtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "green",
  },
  cancelbtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "green",
  },
  savenote: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  cancel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  homecont: {
    marginTop: 30,
    height: 150,
    width: 350,
    borderRadius: 25,
    backgroundColor: "#7cb9e8",
    alignItems: "center",
    justifyContent: "center",
  },
  newnote: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  //
  form: {
    flex: 1,
    alignItems: "center",
  },
  inputRow: {
    width: "60%",
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    justifyContent: "center",
  },
  label: {
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 20,
    color: "white",
  },
  disabledInput: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: "green",
    width: "20%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  buttonText: {
    color: "white",
  },
  inputUser: {
    marginLeft: 10,
    height: 40,
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
  },
  text_small_red: {
    color: "#bc231e",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
