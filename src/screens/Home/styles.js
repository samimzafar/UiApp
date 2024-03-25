import {StyleSheet} from 'react-native';
import {height} from 'react-native-dimension';
import {AppColors} from '../../utils/AppColors';
export const styles = StyleSheet.create({
  horizentalLiner: {
    backgroundColor: AppColors.blackGrey,
    height: height(0.2),
  },
  heightSpacer: value => {
    return {height: height(value)};
  },
});
