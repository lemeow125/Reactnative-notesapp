import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserInfo } from '../../Components/Api/Api';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../../Features/Redux/Store/Store';

export default function UserPage() {
  const { data, isLoading, error } = useQuery("user", UserInfo, { retry: 0, onSuccess: (data) => console.log(data) });
  const logged_in = useSelector(
    (state: RootState) => state.logged_in.value
  );
  const logged_in_user = useSelector(
    (state: RootState) => state.logged_in_user.value
  );
  if (isLoading && !error) {
    return (
      <View style={styles.background}>
        <View style={styles.addnotecont}>
          <Text style={styles.typeinput}>Loading...</Text>
        </View>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.background}>
        <View style={styles.addnotecont}>
          <Text style={styles.typeinput}>An error has occured</Text>
        </View>
      </View>
    );
  }
  return (
    <Background>
      <View style={styles.addnotecont}>
        <SafeAreaView>
          <View style={styles.background}>
            <View style={styles.title}>
              <Text style={styles.typeinput}>Username: {logged_in_user.username}</Text>
              <Text style={styles.typeinput}>Email: {logged_in_user.email}</Text>
              <Text style={styles.typeinput}>User ID: {logged_in_user.id}</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Background>
  );
}