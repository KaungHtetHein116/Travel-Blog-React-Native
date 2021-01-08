import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as theme from '../../util/theme';
import {useNavigation} from '@react-navigation/native';

const HomeScreenHeader = ({avatar}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.flex, styles.row, styles.header]}>
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('SearchScreen')}>
          <FontAwesome name="search" style={{marginRight: 10}} size={20} />
          <View
            style={{
              color: theme.colors.caption,
              borderRadius: 20,
              borderColor: 'black',
              height: 50,
            }}
          />
          <Text>Search</Text>
        </TouchableOpacity>
        <Text style={{fontSize: theme.sizes.font * 2}}>Destinations</Text>
      </View>
      <View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
});

export default HomeScreenHeader;
