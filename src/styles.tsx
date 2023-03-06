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
    backgroundColor: "skyblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },
  forgot_button: {
    fontWeight: 'bold',
    color: 'white',
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "skyblue",
  },
  loginText:{
    color: '#003f5c',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    marginTop: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
