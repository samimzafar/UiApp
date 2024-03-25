import {StyleSheet} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';
import {AppColors} from '../../utils/AppColors';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  question: {
    color: AppColors.white,
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    lineHeight: height(2.8),
  },
  lineaGradientStyle: {
    borderRadius: totalSize(1),
    height: height(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    backgroundColor: AppColors.blackGrey,
    borderRadius: 8,
    flexDirection: 'row',
    height: height(5.5),
    alignItems: 'center',
    paddingHorizontal: width(3.5),
    width: width(89),
  },
  textInputStyle: {
    flex: 1,
    color: AppColors.white,
  },
  dropdownListView: {
    backgroundColor: AppColors.blackDarkGreyOpacity,
    borderRadius: totalSize(1),
    marginTop: height(1),
  },
  dropdownListHeight: {
    height: height(16.5),
  },
  listTitleStyle: {
    color: AppColors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(1.5),
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: totalSize(1.6),
  },
  scrollIndicatorStyle: {
    width: width(1.4),
    backgroundColor: AppColors.bluePurple,
  },
});
