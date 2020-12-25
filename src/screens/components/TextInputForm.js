import React from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

export default function TextInputForm() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AutoGrowingTextInput placeholder={'Start Here'} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
});
