import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ImageInputList from './components/ImageInputList';
import TextInputForm from './components/TextInputForm';
import AnimatedScrollView from '../navigation/components/AnimatedScrollView';
import * as theme from '../util/theme';

export default function PostScreen() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <AnimatedScrollView style={{paddingHorizontal: 10}}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <Text style={styles.text}>Title</Text>
      <TextInputForm />
      <Text style={styles.text}>Location</Text>
      <TextInputForm />
      <Text style={styles.text}>Description</Text>
      <TextInputForm />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8}>
          <Text style={{color: 'white'}}>Post</Text>
        </TouchableOpacity>
      </View>
    </AnimatedScrollView>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '50%',
    backgroundColor: '#0482f7',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'grey',
  },
  text: {
    fontSize: theme.sizes.font * 1.25,
  },
});
