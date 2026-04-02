import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import type { WarningNoteItem } from '@/src/data/warningsNotesData'

type WarningsNotesCardProps = {
  items: WarningNoteItem[]
  onAddNote?: () => void
}

const WarningsNotesCard = ({
  items,
  onAddNote,
}: WarningsNotesCardProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Waarschuwingen & Notities</Text>

      <View style={styles.divider} />

      <View style={styles.list}>
        {items.map((item) => {
          const variantStyles = getVariantStyles(item.type)

          return (
            <View
              key={item.id}
              style={[
                styles.itemCard,
                {
                  backgroundColor: variantStyles.backgroundColor,
                  borderColor: variantStyles.borderColor,
                },
              ]}
            >
              <View style={styles.itemRow}>
                <View style={styles.iconWrap}>
                  {item.type === 'medication' || item.type === 'fallRisk' ? (
                    <MaterialIcons
                      name="warning-amber"
                      size={20}
                      color={variantStyles.iconColor}
                    />
                  ) : (
                    <Feather
                      name="message-circle"
                      size={18}
                      color={variantStyles.iconColor}
                    />
                  )}
                </View>

                <View style={styles.itemContent}>
                  <Text
                    style={[
                      styles.itemTitle,
                      {
                        color: variantStyles.titleColor,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={[
                      styles.itemMessage,
                      {
                        color: variantStyles.messageColor,
                      },
                    ]}
                  >
                    {item.message}
                  </Text>

                  {item.type === 'internalNote' && item.author && item.date ? (
                    <Text style={styles.metaText}>
                      — {item.author}, {item.date}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
          )
        })}
      </View>

      <Pressable
        onPress={onAddNote}
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
      >
        <Text style={styles.addButtonText}>+ Nieuwe Notitie Toevoegen</Text>
      </Pressable>
    </View>
  )
}

const getVariantStyles = (type: WarningNoteItem['type']) => {
  switch (type) {
    case 'medication':
      return {
        backgroundColor: '#FEF2F2',
        borderColor: '#F87171',
        iconColor: '#DC2626',
        titleColor: '#991B1B',
        messageColor: '#B42318',
      }

    case 'fallRisk':
      return {
        backgroundColor: '#FFF7ED',
        borderColor: '#FB923C',
        iconColor: '#EA580C',
        titleColor: '#9A3412',
        messageColor: '#C2410C',
      }

    case 'internalNote':
    default:
      return {
        backgroundColor: '#F3F4F6',
        borderColor: '#D1D5DB',
        iconColor: '#4B5563',
        titleColor: '#111827',
        messageColor: '#374151',
      }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginTop: 12,
    marginBottom: 14,
  },
  list: {
    gap: 12,
  },
  itemCard: {
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconWrap: {
    marginTop: 1,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  itemMessage: {
    fontSize: 15,
    lineHeight: 29,
  },
  metaText: {
    marginTop: 8,
    fontSize: 13,
    color: '#6B7280',
  },
  addButton: {
    marginTop: 12,
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  addButtonPressed: {
    opacity: 0.9,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
})

export default WarningsNotesCard