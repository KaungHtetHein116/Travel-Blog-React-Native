import React from 'react';
import {
  Animated,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import * as theme from '../../util/theme';

const {width} = Dimensions.get('window');
const renderDestinations = ({destinations}) => {
  const navigation = useNavigation();
  const scrollX = new Animated.Value(0);
  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                {borderWidth: borderWidth},
              ]}
            />
          );
        })}
      </View>
    );
  };

  const renderDestination = (item) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ArticleScreen', {article: item})}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{borderRadius: theme.sizes.radius}}
          source={{uri: item.preview}}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{flex: 0}}>
              <Image source={{uri: item.user.avatar}} style={styles.avatar} />
            </View>
            <View
              style={[
                styles.column,
                {flex: 2, paddingHorizontal: theme.sizes.padding / 2},
              ]}>
              <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
                {item.user.name}
              </Text>
              <Text style={{color: theme.colors.white}}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={styles.rating}>1</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: '500',
              paddingBottom: 8,
            }}>
            {item.title}
          </Text>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', alignItems: 'flex-end'},
            ]}>
            <Text style={{color: theme.colors.caption}}>
              {item.description.split('').slice(0, 50)}...
            </Text>
            <FontAwesome
              name="chevron-right"
              size={theme.sizes.font * 0.75}
              color={theme.colors.caption}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.column, styles.destinations]}>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={{overflow: 'visible', height: 280}}
        data={destinations}
        keyExtractor={(item, index) => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => renderDestination(item)}
      />
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - theme.sizes.padding * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.padding * 4,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
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
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  },
  rating: {
    fontSize: theme.sizes.font * 1.25,
    fontWeight: '500',
    color: 'white',
  },
});

export default renderDestinations;
