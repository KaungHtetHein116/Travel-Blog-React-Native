import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import * as theme from '../../util/theme';

const {width} = Dimensions.get('window');

const RenderRecommended = ({destinations}) => {
  const navigation = useNavigation();
  const renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? 'active' : 'gray']}
        />
      );
    });
  };
  const renderRecommendation = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ArticleScreen', {article: item})}>
        <View style={styles.recommendation}>
          <View style={[styles.flex, styles.recommendationHeader]}>
            <Image
              style={[styles.recommendationImage]}
              source={{uri: item.preview}}
            />
          </View>
          <View
            style={[
              styles.flex,
              styles.column,
              styles.shadow,
              {
                justifyContent: 'space-evenly',
                padding: theme.sizes.padding / 2,
              },
            ]}>
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: '500',
                paddingBottom: theme.sizes.padding / 4.5,
              }}>
              {item.title}
            </Text>
            <Text style={{color: theme.colors.caption}}>{item.location}</Text>
            <View
              style={[
                styles.row,
                {
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
              ]}>
              {renderRatings(item.rating)}
              <Text style={{color: theme.colors.active}}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.flex, styles.column]}>
      <View style={[styles.column]}>
        <FlatList
          numColumns={2}
          // pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={destinations}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({item, index}) => (
            <View style={{flex: 1}}>{renderRecommendation(item, index)}</View>
          )}
        />
      </View>
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

export default RenderRecommended;
