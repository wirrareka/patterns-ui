import React, { ReactElement } from 'react'
import { Page, Image, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import Contact from '../models/contact'

interface Props {
  contact: Contact
}

const styles = StyleSheet.create({
  addressLine: {
    fontSize: 8,
    fontFamily: 'Oswald Light'
  },
  nameLine: {
    fontSize: 10,
    lineHeight: 1.6,
    fontFamily: 'Oswald'
  }
})

export default function ContactForm({ contact }: Props): ReactElement {
  return <View style={{ flexDirection: 'column', marginTop: 4 }}>
    <View style={{ flexDirection: 'column', height: 56 }}>
      <Text style={styles.nameLine}>{ contact.name }</Text>
      <Text style={styles.addressLine}>{ contact.street }</Text>
      <Text style={styles.addressLine}>{ contact.street2 }</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{...styles.addressLine, flex: 1, marginRight: 10 }}>{ contact.zip }</Text>
        <Text style={{...styles.addressLine, flex: 3 }}>{ contact.city }</Text>
      </View>
      <Text style={styles.addressLine}>{ contact.country }</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 12 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.addressLine}>IČO</Text>
        <Text style={styles.addressLine}>DIČ</Text>
        <Text style={styles.addressLine}>IČ DPH</Text>
      </View>
      <View style={{ flexDirection: 'column', flex: 3 }}>
        <Text style={styles.addressLine}>{ contact.businessId }</Text>
        <Text style={styles.addressLine}>{ contact.vatPayerId }</Text>
        <Text style={styles.addressLine}>{ contact.vatId }</Text>
      </View>
    </View>
  </View>
}
