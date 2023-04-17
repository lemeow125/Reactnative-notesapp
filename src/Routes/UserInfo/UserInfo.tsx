import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserInfo } from "../../Components/Api/Api";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/Redux/Store/Store";

export default function UserPage() {
  const { data, isLoading, error } = useQuery("user", UserInfo, {
    retry: 0,
    onSuccess: (data) => console.log(data),
  });
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  if (isLoading && !error) {
    return (
      <View style={styles.background}>
        <View style={styles.addnotecont}>
          <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
            Loading...
          </Text>
        </View>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.background}>
        <View style={styles.addnotecont}>
          <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
            An error has occured
          </Text>
        </View>
      </View>
    );
  }
  return (
    <Background>
      <View style={styles.addnotecont}>
        <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
          Username: {data.username}
        </Text>
        <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
          Email: {data.email}
        </Text>
        <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
          User ID: {data.id}
        </Text>
      </View>
    </Background>
  );
}
