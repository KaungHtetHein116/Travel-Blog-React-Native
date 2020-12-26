import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>For Future Improvement</Text>
      {/* <LottieView
        source={require('../assets/lottie/done.json')}
        autoPlay
        loop
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
