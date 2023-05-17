import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  flatCustom: {
    height: '75%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  headerMain: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  lowerMain: {
    backgroundColor: '#EEECED',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  headerFlatMain: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  renderMain: {
    height: 220,
    width: 380,
    marginTop: 18,
  },
  mainRenderImage: {
    height: 170,
    width: 380,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  mainText: {
    height: 40,
    width: 260,
    backgroundColor: '#EEECED',
    borderBottomLeftRadius: 20,
  },
  mainHeadText: {
    marginLeft: 15,
    marginTop: 5,
    color: '#2B2D42',
    fontSize: 18,
  },
  pointMain: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000802E',
    borderRadius: 50,
    borderColor: '#000080',
    borderWidth: 1,
  },
  numberText: {
    color: '#000080',
    fontSize: 15,
  },
  customWidth: {
    width: 10,
  },
  rightIcon: {
    height: 40,
    width: 70,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A82424',
  },
});

export default styles;
