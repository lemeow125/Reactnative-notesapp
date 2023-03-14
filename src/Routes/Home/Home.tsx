import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import AddIcon from '../../Components/Icons/AddIcon/AddIcon';

export default function Home() {
  //const navigation = ({ navigation}: {navigation:any}) => {
  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 25}}}>Clip Notes</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={styles.homecont}> 
        <View style={styles.addicon}> 
        <AddIcon size={32} color="white" />
        <Text style={styles.no}>No notes yet...</Text>
        </View>
      <View style={{margin: 16}} />
      </View>
      </View>
    </Background>
  );
}
