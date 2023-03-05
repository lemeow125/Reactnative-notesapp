import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';

export default function Register() {
  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}>Register</Text>
    </Background>
  );
}
