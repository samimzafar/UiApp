import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import {AppColors} from '../../utils/AppColors';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeftSideView: {
    backgroundColor: AppColors.blackGrey3,
    paddingHorizontal: totalSize(2),
    paddingVertical: totalSize(2),
    borderRadius: totalSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLabel: {
    color: AppColors.white,
    textAlign: 'center',
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.8),
    lineHeight: height(3),
  },
  headerSubLabel: {
    color: AppColors.whiteGrey,
    textAlign: 'center',
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: totalSize(1.6),
    lineHeight: height(3),
  },
});
