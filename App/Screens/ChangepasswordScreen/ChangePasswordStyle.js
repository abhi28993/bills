import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  uppermain: {
    backgroundColor: '#000',
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  inputArea: {
    marginTop: '8%',
  },
  lowerMain: {
    width: '100%',
    padding: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
  },
  mainheading: {
    fontSize: 30,
    color: '#2B2D42',
    marginTop: '2%',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  subheading: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: 20,
  },
  subTexting: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
    marginLeft: '6%',
    marginRight: '6%',
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: 14,
  },
  backLogin: {
    color: '#14213D',
    textAlign: 'center',
    marginTop: '8%',
    fontFamily: 'Poppins-Medium',
  },
  logotick: {
    alignSelf: 'center',
    marginTop: '15%',
    marginBottom: '8%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
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
});

export default styles;
