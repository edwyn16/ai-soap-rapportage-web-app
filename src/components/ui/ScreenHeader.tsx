import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../constants/theme'

type ScreenHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

const ScreenHeader = ({ eyebrow, title, subtitle }: ScreenHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      {eyebrow ? <Text style={styles.eyebrow}> {eyebrow} </Text> : null}
      <Text style={styles.title}> {title} </Text>
      {subtitle ? <Text style={styles.subtitle}> {subtitle} </Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.lg,
  },
  eyebrow: {
    fontSize: theme.typography.small,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.small,
    color: theme.colors.textSoft,
    lineHeight: 20,
  },
})

export default ScreenHeader