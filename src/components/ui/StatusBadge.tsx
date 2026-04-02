import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../constants/theme'

type StatusBadgeProps = {
  status: 'Approved' | 'Pending'
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isApproved = status === 'Approved'

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: isApproved
            ? theme.colors.primaryLight
            : '#FEF3C7',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isApproved ? theme.colors.primaryDark : '#92400E',
          },
        ]}
      >
        {status}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: theme.typography.xs,
    fontWeight: '700',
  },
})

export default StatusBadge