import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  postName: {
    color: '#2B2D42',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  postNickName: {
    color: '#2B2D42',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  mainInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: '2%',
  },
  headerMain: {
    width: '80%',
    marginLeft: '4%',
  },
  mainScreen: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '3%',
  },
  underHeader: {
    flexDirection: 'row',
  },
  headMainText: {
    width: '77%',
    marginLeft: '5%',
  },
  textHeding: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Light',
  },
  miniHeadingText: {
    color: '#2B2D42',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  customMain: {
    height: 1,
    backgroundColor: '#DFDFDF',
  },
  inputMains: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: '1%',
  },
  titleInput: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
    fontSize: 20,
  },
  linkMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkInput: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    width: '92%',
  },
  listMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: 'gray',
    shadowOpacity: 5.8,
    shadowRadius: 20,
    elevation: 8,
    padding: 10,
    marginTop: '3%',
  },
  listLeftIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#8D99AE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listText: {
    width: '75%',
    marginLeft: '5%',
  },
  rightIcon: {
    height: 20,
    width: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Styles;
