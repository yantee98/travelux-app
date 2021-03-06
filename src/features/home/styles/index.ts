import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import Dimensions from '../../../constants/dimens';

const WIDTH_SCREEN = Dimensions.common.WINDOW_WIDTH;
const HEIGHT_SCREEN = Dimensions.common.WINDOW_HEIGHT;

const MARGIN_TOP_BETWEEN_ELEMENT_SCROLL = 30;

const HomeStyle = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  fixed: {
    marginBottom: 20,
  },
  scroll: {
    marginTop: 10,
  },
  content: {
    paddingBottom: HEIGHT_SCREEN / 5,
  },
});

const HeaderStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'SourceSansPro-ExtraLight',
    letterSpacing: 2,
  },
});

const SearchStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.grey400,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: Colors.grey900,
    fontFamily: 'SourceSansPro-LightItalic',
    fontSize: 16,
  },
  searchLogo: {
    padding: 5,
  },
});

const PlaceStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {},
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.grey300,
    borderRadius: 30,
  },
  name: {
    paddingTop: 5,
    letterSpacing: 0.2,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'SourceSansPro-Regular',
  },
});

const DiscountStyle = StyleSheet.create({
  wrapper: {
    marginTop: MARGIN_TOP_BETWEEN_ELEMENT_SCROLL,
  },
  title: {
    fontSize: 22,
    fontFamily: 'SourceSansPro-Regular',
  },
  card: {
    flex: 1,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.grey300,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  cardName: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    fontFamily: 'SourceSansPro-Regular',
  },
  cardDescription: {
    paddingLeft: 20,
    paddingBottom: 30,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  cardImage: {
    width: '100%',
    height: 180,
    marginTop: 0,
    paddingTop: 0,
  },
});
const PromotionStyle = StyleSheet.create({
  wrapper: {
    marginTop: MARGIN_TOP_BETWEEN_ELEMENT_SCROLL,
  },
  title: {
    fontSize: 22,
    fontFamily: 'SourceSansPro-Regular',
  },
  description: {
    paddingTop: 10,
    fontSize: 16,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  image: {
    width: '100%',
    height: 180,
  },
});

const HouseStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: MARGIN_TOP_BETWEEN_ELEMENT_SCROLL,
  },
  item: {},
  image: {
    width: 40,
    height: 40,
  },
  name: {
    paddingTop: 5,
    letterSpacing: 0.2,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'SourceSansPro-Regular',
  },
});

const ListRoomStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: MARGIN_TOP_BETWEEN_ELEMENT_SCROLL,
  },
  title: {
    fontSize: 22,
    fontFamily: 'SourceSansPro-Regular',
  },
  description: {
    paddingTop: 10,
    fontSize: 16,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  roomWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  room: {
    width: WIDTH_SCREEN / 2.4,
    marginBottom: 20,
  },
  imageRoom: {
    width: '100%',
    height: 100,
  },
  typeRoom: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'SourceSansPro-SemiBold',
    color: Colors.grey700,
  },
  nameRoom: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'SourceSansPro-Bold',
  },
  infoRoom: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  priceRoom: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'SourceSansPro-Bold',
  },
  action: {
    alignItems: 'center',
    marginTop: 10,
  },
  buttonViewAll: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderWidth: 1,
    borderColor: Colors.lightGreen500,
    borderRadius: 20,

    shadowColor: Colors.lightGreen500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 6,
  },
  textViewAll: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});

export {
  HomeStyle,
  HeaderStyle,
  SearchStyle,
  PlaceStyle,
  DiscountStyle,
  PromotionStyle,
  HouseStyle,
  ListRoomStyle,
};
