import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  pageMain: {
    marginLeft: '8%',
    marginRight: '8%',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  headerMain: {
    width: '80%',
    marginLeft: '4%',
  },
  postTitle: {
    color: '#2B2D42',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginTop: '1%',
    marginBottom: '1%',
  },
  iconsMain: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  bottomMain: {
    flexDirection: 'row',
    width: '22%',
  },
  flatCustom: {
    height: '70%',
    marginLeft: '8%',
    marginRight: '8%',
  },
  dpPoc: {
    height: 35,
    width: 35,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#A82424',
  },
  mainImage: {
    borderRadius: 20,
    height: 200,
    width: 370,
  },
  mainTextStyle: {
    color: '#2B2D42',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
  underHeader: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  headMainText: {
    width: '77%',
    marginLeft: '5%',
  },
  textHeding: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  miniHeadingText: {
    color: '#2B2D42',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  textareaContainer: {
    fontSize: 15,
    height: 220,
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#EFEFEF',
  },
  textAreaMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '4%',
  },
  textAreaView: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000095',
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  customHeight: {
    height: '10%',
  },
  modalMain: {
    borderColor: 'green',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 90,
    width: 90,
    borderWidth: 2,
  },
  subheading: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
});

export default styles;
