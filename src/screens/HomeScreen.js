import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ApiCall} from '../redux/actions/DataAction';
import HomeScreenHeader from './components/HomeScreenHeader';
import RenderRecommended from './components/RenderRecommended';
import RenderDestinations from './components/RenderDestinations';
import {useNavigation} from '@react-navigation/native';
import * as theme from '../util/theme';
import AnimatedScrollView from '../navigation/components/AnimatedScrollView';

const {width} = Dimensions.get('window');
const HomeScreen = () => {
  const navigation = useNavigation();
  const state = useSelector((state) => state.BlogData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ApiCall());
  }, []);

  return state.loading ? (
    <Text>loading</Text>
  ) : (
    <View>
      <HomeScreenHeader avatar={state.destinations[0].user.avatar} />
      <AnimatedScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 300,
          flexGrow: 1,
        }}>
        <RenderDestinations destinations={state.destinations} />
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{fontSize: theme.sizes.font * 1.4}}>Recommended</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('ArticleList', {
                destinations: state.destinations,
              })
            }>
            <Text style={{color: theme.colors.caption}}>More</Text>
          </TouchableOpacity>
        </View>
        <RenderRecommended destinations={state.destinations} />
      </AnimatedScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },

  recommendation: {
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white,
  },
  recommendationImage: {
    width: width - theme.sizes.padding * 2,
    height: (width - theme.sizes.padding * 2) / 2,
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
});
export default HomeScreen;
