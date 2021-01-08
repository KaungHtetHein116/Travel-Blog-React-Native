import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../util/theme';
import ReadMore from '@fawazahmed/react-native-read-more';
import {useNavigation} from '@react-navigation/native';
import ImageView from 'react-native-image-view';
import AnimatedScrollView from '../navigation/components/AnimatedScrollView';

const {width, height} = Dimensions.get('window');

const ArticleScreen = (props) => {
  const {article} = props.route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(null);
  const navigation = useNavigation();
  const scrollX = new Animated.Value(0);

  const bookmarkIcon = () => {
    setBookmark(!bookmark);
  };

  const Header = () => {
    return (
      <View style={[styles.flex, styles.row, styles.header]}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name="chevron-left"
            color={theme.colors.white}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={bookmarkIcon}>
          {bookmark ? (
            <MaterialIcons
              name="bookmark-border"
              color={theme.colors.white}
              size={29}
            />
          ) : (
            <MaterialIcons
              name="bookmark"
              color={theme.colors.white}
              size={29}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={[styles.flex, styles.row, styles.dotsContainer]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, {opacity}]}
            />
          );
        })}
      </View>
    );
  };

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
          style={{marginRight: 4}}
        />
      );
    });
  };

  return (
    <View>
      {Header()}
      <AnimatedScrollView style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}>
            {article.images.map((img, index) => (
              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={async () => {
                    await setImage(img.source.uri);
                    await setIndex(index);
                    await setIsVisible(true);
                  }}>
                  <Image
                    key={`${index}-${img.source.uri}`}
                    source={{uri: img.source.uri}}
                    resizeMode="cover"
                    style={{width, height: width}}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <Image
              style={[styles.avatar, styles.shadow]}
              source={{uri: article.user.avatar}}
            />
            <Text style={styles.title}>{article.title}</Text>
            <View
              style={[
                styles.row,
                {alignItems: 'center', marginVertical: theme.sizes.margin / 2},
              ]}>
              {renderRatings(article.rating)}
              <Text style={{color: theme.colors.active}}>{article.rating}</Text>
              <Text style={{marginLeft: 8, color: theme.colors.caption}}>
                ({article.reviews} reviews)
              </Text>
            </View>
            <ReadMore
              seeMoreStyle={{color: theme.colors.active}}
              seeLessStyle={{color: theme.colors.active}}
              style={styles.description}>
              {article.description}
            </ReadMore>
          </View>
        </View>
      </AnimatedScrollView>
      <ImageView
        images={article.images}
        imageIndex={index}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
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
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentHeader: {
    backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0,
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold',
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption,
    textAlign: 'justify',
  },
});

export default ArticleScreen;
