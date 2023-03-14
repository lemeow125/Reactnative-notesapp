import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserIcon from '../../Components/Icons/UserIcon/UserIcon';

export default function UserInfo() {
  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}></Text>
      <SafeAreaView>
      <View style={styles.userinfocont}>  
        <Text style ={styles.userlabel} > <UserIcon size={32} color="white"/> USER INFO</Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}
