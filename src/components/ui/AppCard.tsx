import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../../constants/theme'

const AppCard = ({ children }: PropsWithChildren) => {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
})

export default AppCard