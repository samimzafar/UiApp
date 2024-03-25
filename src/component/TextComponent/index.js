import {Text, View} from 'react-native';
import {styles} from './style';
export const TextComponent = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textLabel}>Content type</Text>
      <Text style={styles.textDescription}>
        Choose a content type that best fits your needs.
      </Text>
    </View>
  );
};
