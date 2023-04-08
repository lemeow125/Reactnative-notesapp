import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#002d4c',
    height: '100%',
    width: '100%',
  },
  text_white: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button_generic: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderRadius: 16,
  },
  flex_row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex_column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    color: 'white',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },
  forgot_button: {
    fontWeight: 'bold',
    color: 'white',
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
  loginText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  registertext:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  container: {
    marginTop: 30,
    marginLeft: 22,
    height: 500,
    width: 350,
    borderRadius: 25, 
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center",
  },
  loginlabel:{
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 30,
    color: 'white',
  },
  text_small_red: {
    color: "#bc231e",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
