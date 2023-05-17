import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F5FCFF',
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
  linkInput: {
    color: '#000000',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    height: 200,
  },
  textareaContainer: {
    height: 220,
    padding: 5,
    backgroundColor: '#F5FCFF',
    shadowColor: 'gray',
    shadowOpacity: 3.8,
    shadowRadius: 10,
    elevation: 8,
    marginTop: '4%',
  },
});
export default Styles;
