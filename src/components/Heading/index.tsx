import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface HeadingProps extends ViewProps {
  title: string;
  subTitle: string;
}

export function Heading({ title, subTitle, ...rest }: HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subTitle}
      </Text>
    </View>
  );
}
