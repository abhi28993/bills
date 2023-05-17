import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
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
  profilePicMain: {
    height: 100,
    width: 100,
    flexDirection: 'row',
    marginTop: '5%',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#A82424',
  },
  createIcon: {
    marginLeft: '-20%',
    marginTop: '50%',
  },
  upperMain: {
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center',
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
  inputOuter: {
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#FCFCFC',
    width: '100%',
    height: 45,
    alignItems: 'center',
  },
  inputSingle: {
    width: '80%',
    height: 45,
    color: '#000',
    marginLeft: '2%',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  leftIcon: {
    marginLeft: '2%',
  },
  textareaContainer: {
    fontSize: 15,
    height: 220,
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#FCFCFC',
    marginTop: '4%',
  },
  customMargin: {
    marginTop: '4%',
  },
  customLine: {
    height: 1,
    backgroundColor: '#828282',
    marginTop: '4%',
    marginBottom: '4%',
  },
  switchMain: {
    flexDirection: 'row',
  },
  switchHeight: {
    width: '85%',
  },
  textStyles: {
    fontFamily: 'Poppins-Light',
    color: '#000000',
    fontSize: 14,
  },
});

export default styles;
