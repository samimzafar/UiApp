import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {height, width, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  container: {
    marginTop: height(4.5),
  },
  question: {
    color: AppColors.white,
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.5),
    marginBottom: height(3),
    lineHeight: height(2.8),
  },
  sliderLineVew: {
    backgroundColor: AppColors.darkBlack,
    paddingHorizontal: width(4),
    paddingVertical: height(2),
    borderRadius: totalSize(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderPointStyle: {
    color: AppColors.white,
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.4),
  },
  sliderLineContainer: {
    flexDirection: 'row',
    width: width(62),
    height: height(0.8),
    borderRadius: totalSize(2),
    overflow: 'hidden',
  },
  activeSliderLine: {
    height: '100%',
  },
  inactiveSliderLine: {
    flex: 1,
    backgroundColor: AppColors.blackGrey,
  },
  circleContainer: {
    position: 'absolute',
    left: width(13),
  },
  circleOuterView: {
    width: totalSize(3),
    height: totalSize(3),
    borderRadius: totalSize(10),
    borderColor: AppColors.darkPink,
    borderWidth: totalSize(0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: totalSize(1.7),
    height: totalSize(1.7),
    borderRadius: totalSize(4),
    backgroundColor: AppColors.darkPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderValueInCircleStyle: {
    paddingVertical: height(0.5),
    borderRadius: totalSize(2),
    width: width(12),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.bluePurple,
    position: 'absolute',
    bottom: height(4),
  },
  sliderTextValueStyle: {
    color: AppColors.white,
    fontSize: totalSize(1.4),
    fontFamily: FontFamily.PoppinsRegular,
  },
});
