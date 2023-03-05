import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import {useNavigation} from '@react-navigation/native';
import {RootDrawerParamList} from '../../Interfaces/Interfaces';
import AppIcon from '../../Components/Icons/AppIcon/AppIcon';
import Button from '../../Components/Buttons/ButtonCentered/ButtonCentered';
import HomeIcon from '../../Components/Icons/HomeIcon/HomeIcon';
import AddIcon from '../../Components/Icons/AddIcon/AddIcon';
import UserIcon from '../../Components/Icons/UserIcon/UserIcon';
import LoginIcon from '../../Components/Icons/LoginIcon/LoginIcon';
import SignupIcon from '../../Components/Icons/SignupIcon/SignupIcon';

export interface props {}

export default function Home(props: props) {
  const navigation = useNavigation<RootDrawerParamList>();
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
