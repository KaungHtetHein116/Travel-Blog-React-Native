import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RenderRecommended from './components/RenderRecommended';
import _ from 'lodash';

const SearchScreen = () => {
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const navigation = useNavigation();
  const state = useSelector((state) => state.BlogData);

  useEffect(() => {
    setMasterDataSource(state.destinations);
    setFilteredDataSource(state.destinations);
  }, []);

  const searchFilterFunction = (text) => {
    const formattedQuery = text.toLowerCase();
    const result = _.filter(masterDataSource, (location) => {
      if (
        location.title.toLowerCase().includes(formattedQuery) ||
        location.location.toLowerCase().includes(formattedQuery)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredDataSource(result);
  };

  return (
    <View>
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.goBack()}>
              <FontAwesome
                name="chevron-left"
                color={theme.colors.black}
                size={20}
              />
            </TouchableOpacity>
            <TextInput
              onChangeText={(text) => searchFilterFunction(text)}
              autoFocus
              style={{
                color: theme.colors.black,
                borderRadius: 20,
                width: 300,
                borderColor: 'grey',
              }}
              placeholder="Find your next destination . . ."
            />
          </View>
        </View>
      </View>
      <RenderRecommended destinations={filteredDataSource} />
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
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default SearchScreen;
