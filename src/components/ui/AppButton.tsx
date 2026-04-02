import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native'
import { theme } from '../../constants/theme'

type AppButtonProps = {
  label: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  style?: ViewStyle
}

const AppButton = ({ label, onPress, variant = 'primary', style }: AppButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, variant === 'primary' ? styles.primaryButton : styles.secondaryButton, style]}>
      <Text style={[ styles.label, variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel ]}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: theme.colors.text,
  },
  secondaryButton: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  label: {
    fontSize: theme.typography.body,
    fontWeight: '600',
  },
  primaryLabel: {
    color: theme.colors.textInverse,
  },
  secondaryLabel: {
    color: theme.colors.text,
  },
})

export default AppButton