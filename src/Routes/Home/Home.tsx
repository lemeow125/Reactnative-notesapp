import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import AppIcon from '../../Components/Icons/AppIcon/AppIcon';
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  return (
    <Background>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppIcon size={64} color="white" />
        <Text style={{...styles.text_white, ...{fontSize: 32}}}>
          Clip Notes
        </Text>
      </View>
      <View style={{margin: 16}} />
    </Background>
  );
}
