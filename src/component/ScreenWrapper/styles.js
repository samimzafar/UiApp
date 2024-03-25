import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {width} from 'react-native-dimension';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackScreen,
    flex: 1,
  },
  childrenContainer: {
    paddingHorizontal: width(5),
  },
});
