import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ApprovalSoapSectionCard from '@/src/components/approval/ApprovalSoapSectionCard'
import { approvalSoapSections } from '@/src/data/approvalData'

const ApprovalSoapSectionList = () => {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (sectionId: string) => {
    setOpenId((current) => (current === sectionId ? null : sectionId))
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>SOAP Rapportage</Text>

      <View style={styles.list}>
        {approvalSoapSections.map((section) => (
          <ApprovalSoapSectionCard
            key={section.id}
            section={section}
            isOpen={openId === section.id}
            onToggle={() => handleToggle(section.id)}
          />
        ))}
      </View>
    </View>
  )
}

export default ApprovalSoapSectionList

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },
  heading: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Sora_600SemiBold',
    color: '#334155',
  },
  list: {
    gap: 10,
  },
})