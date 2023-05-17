import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  sliderMain: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#fff',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {},
  introTextStyle: {
    fontSize: 20,
    color: 'white',
    marginTop: 32,
    fontFamily: 'SFProDisplay-Regular',
  },
  introTitleStyle: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  introTextslideStyle: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  headingMain: {
    paddingLeft: '12%',
    paddingRight: '12%',
    marginBottom: '5%',
  },
  nextButtonView: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 55,
    width: '85%',
    backgroundColor: '#A82424',
    paddingRight: 25,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: '#fff',
    fontFamily: 'NetflixSansMedium',
  },
  imageBackground: {
    height: hp('75%'),
    width: '100%',
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    height: hp('12%'),
  },
  logoImageView: {
    width: '30%',
    marginTop: 15,
    marginHorizontal: 22,
  },
  skipView: {
    marginTop: 25,
    marginRight: 22,
  },
  skipText: {
    fontSize: 18,
    color: '#fff',
  },
  titleView: {
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('25%'),
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '15%',
    alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '95%',
    backgroundColor: '#581845',
    borderRadius: 10,
  },
  button2View: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: hp('5%'),
    width: wp('80%'),
    borderColor: '#581845',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SFProDisplay-Semibold',
  },
  button1Text: {
    fontSize: 16,
    color: '#242424',
    fontFamily: 'NetflixSansRegular',
  },
  caregiver: {
    fontSize: 15,
    color: '#8a8a8a',
    fontFamily: 'SFProDisplay-Semibold',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearMain: {
    backgroundColor: '#A82424',
  },
  dotColor: {
    backgroundColor: '#A82424',
  },
  sliderView: {
    flex: 1,
    height: hp('25%'),
    backgroundColor: '#A82424',
  },
  authBtnFirst: {
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#A82424',
  },
  authBtnSecond: {
    backgroundColor: '#fff',
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    borderRadius: 30,
  },
  authTextFirst: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
  authTextSecond: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
