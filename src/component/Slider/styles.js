import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20, // Padding for the container
  },
  sliderLineContainer: {
    flexDirection: 'row',
    width: 300,
    height: 20, // Height of the slider line
    borderRadius: 10, // Round the corners
    backgroundColor: 'rgba(58, 57, 64, 1)', // Background color for the inactive part
    overflow: 'hidden', // Ensures the inner elements don't overflow
  },
  activeSliderLine: {
    height: '100%',
    // Other styles for the active part of the slider
  },
  inactiveSliderLine: {
    flex: 1,
    backgroundColor: 'rgba(58, 57, 64, 1)',
    // Other styles for the inactive part of the slider
  },
  circleContainer: {
    position: 'absolute',
    left: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 125, 255, 1)', // Circle color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff', // Optional: border color
  },
  circleText: {
    color: '#fff',
    fontSize: 16,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 10, // Space between the slider and labels
  },
  label: {
    color: '#fff', // Label color
  },
});
