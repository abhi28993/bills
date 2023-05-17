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
  embdedText: {color: '#707070', fontSize: 14, fontFamily: 'Poppins-Light'},
  embdedTextMain: {
    height: 40,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000095',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonn: {
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#202A44',
    height: 30,
    width: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  imgView: {
    width: '50%',
    marginVertical: 10,
  },
  imgContainer: {
    marginVertical: 20,
  },
  flatMain: {
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImageStyle: {
    width: 170,
    height: 140,
  },
  iconMain: {
    alignItems: 'flex-end',
    marginTop: '3%',
    marginRight: '3%',
  },
  iconTouch: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  imageMain: {
    width: 40,
    height: 30,
  },
});
export default Styles;
