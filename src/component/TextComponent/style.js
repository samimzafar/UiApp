import {StyleSheet} from 'react-native';
import FontFamily from '../../utils/FontFamily';
import {height, totalSize} from 'react-native-dimension';
import {AppColors} from '../../utils/AppColors';
export const styles = StyleSheet.create({
  viewContainer: {
    height: height(10),
    marginTop: height(1),
  },
  textLabel: {
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(2),
    lineHeight: height(3.5),
    color: AppColors.white,
  },
  textDescription: {
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: totalSize(1.6),
    color: AppColors.whiteGrey,
  },
});
