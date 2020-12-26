import React from 'react';
import {StyleSheet, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

export default function LottieDone({modalVisible, onDone}) {
  return (
    <Modal visible={modalVisible}>
      <LottieView
        source={require('../../assets/lottie/done.json')}
        autoPlay
        loop={false}
        style={styles.animation}
        onAnimationFinish={() => onDone()}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
