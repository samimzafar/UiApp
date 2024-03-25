import {StyleSheet} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
import {AppColors} from '../../utils/AppColors';
export const styles = StyleSheet.create({
  btnTextContainer: {
    marginTop: height(3),
    backgroundColor: AppColors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(1.2),
    borderRadius: totalSize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnTextStyle: {
    fontSize: totalSize(2),
    fontFamily: FontFamily.PoppinsRegular,
  },
});
