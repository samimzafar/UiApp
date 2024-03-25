import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {height, width, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  container: {
    marginTop: height(3),
  },
  question: {
    color: AppColors.white,
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.5),
    marginBottom: height(4),
    lineHeight: height(2.8),
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
    left: width(5),
  },
  circle: {
    width: totalSize(2),
    height: totalSize(2),
    borderRadius: totalSize(4),
    backgroundColor: AppColors.darkPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: AppColors.white,
    fontSize: totalSize(1.6),
    fontFamily: FontFamily.PoppinsRegular,
  },
});
