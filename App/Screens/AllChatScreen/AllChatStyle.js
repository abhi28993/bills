import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  customHeight: {
    height: '10%',
  },
  lineViewItem: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: '3%',
    marginBottom: '3%',
  },
  pageMain: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  postName: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  postNickName: {
    color: '#000000',
    fontSize: 12,
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
  iconsMain: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  bottomMain: {
    flexDirection: 'row',
    width: '22%',
  },
  flatCustom: {
    height: '100%',
    marginTop: '2%',
  },
  pageMainHeading: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: -15,
  },
});

export default styles;
