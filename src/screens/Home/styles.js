import {StyleSheet} from 'react-native';
import FontFamily from '../../utils/FontFamily';
import {height, width, totalSize} from 'react-native-dimension';
import {AppColors} from '../../utils/AppColors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderLine: {
    width: 300,
    height: 1,
    backgroundColor: 'grey',
    position: 'relative',
  },
  circleContainer: {
    position: 'absolute',
    top: -25,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  circleText: {
    color: 'red',
    fontWeight: 'bold',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 10,
  },
  label: {
    width: 40,
    alignItems: 'center',
  },
});
