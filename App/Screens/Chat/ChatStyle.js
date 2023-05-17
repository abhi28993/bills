import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#00000095',
    bottom: 0,
  },
  pageMain: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconMain: {
    height: 60,
    width: 60,
    backgroundColor: '#A82424',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: '3%',
  },
  centeredView: {
    height: '40%',
    width: '100%',
  },
  customHeight: {
    height: '70%',
  },
  iconsMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  crossIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default styles;
