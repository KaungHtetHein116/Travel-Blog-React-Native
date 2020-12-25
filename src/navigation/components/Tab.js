import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = ({color, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && (
        <Icon
          name={icon}
          size={icon === 'plus-circle' ? 50 : 30}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 60,
  },
});

export default Tab;
