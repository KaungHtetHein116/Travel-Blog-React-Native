import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {text: 'No'},
        {text: 'Yes', onPress: () => onChangeImage(null)},
      ]);
    }
  };
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response.uri);
        onChangeImage(response.uri);
      }
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Icon name="camera" size={40} />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
