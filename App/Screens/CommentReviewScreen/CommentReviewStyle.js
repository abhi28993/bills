import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  numberMain: {
    color: '#2B2D42',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
  lowermain: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  messageBack: {
    backgroundColor: '#EFEFEF',
    padding: '5%',
    borderRadius: 10,
    marginRight: '20%',
  },
  messageBackTwo: {
    alignItems: 'flex-end',
    marginTop: '2%',
  },
  messageBackSecond: {
    backgroundColor: '#EFEFEF',
    padding: '5%',
    borderRadius: 10,
  },
  renderMain: {
    width: '30%',
    height: 45,
    padding: 10,
    borderRadius: 10,
    margin: '2%',
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 7,
  },
  flatListStyle: {
    width: '100%',
    height: 65,
    marginTop: '2%',
    marginBottom: '2%',
  },
  flattext: {
    // color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
});

export default styles;
