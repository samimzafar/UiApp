import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {height, totalSize, width} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
export const styles = StyleSheet.create({
  container: {
    marginTop: height(3),
    height: height(21),
  },
  question: {
    color: AppColors.white,
    fontFamily: FontFamily.PoppinsBold,
    fontSize: totalSize(1.5),
    marginBottom: height(2.8),
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    borderWidth: width(0.2),
    borderColor: AppColors.white,
    borderRadius: totalSize(10),
    paddingVertical: height(1.3),
    paddingHorizontal: width(6),
    marginBottom: height(1.7),
    marginRight: width(3),
  },
  selectedOption: {
    backgroundColor: AppColors.bluePurple,
    borderColor: AppColors.transparent,
  },
  optionText: {
    color: AppColors.white,
    textAlign: 'center',
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: totalSize(1.6),
  },
});
