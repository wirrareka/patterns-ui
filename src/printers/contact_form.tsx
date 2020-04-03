import React, { ReactElement } from 'react'
import { Page, Image, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import Contact from '../models/contact'
import { t } from '../locale_manager'

interface Props {
  contact: Contact
  simple: boolean
}

const styles = StyleSheet.create({
  addressLine: {
    fontSize: 9,
    fontFamily: 'Oswald Light'
  },
  contactLine: {
    fontSize: 8,
    fontFamily: 'Oswald Light'
  },
  nameLine: {
    fontSize: 11,
    lineHeight: 1.6,
    fontFamily: 'Oswald'
  }
})

export default function ContactForm({ contact, simple }: Props): ReactElement {
  return <View style={{ flexDirection: 'column', marginTop: 0 }}>
    <View style={{ flexDirection: 'column'}}>
      <Text style={styles.nameLine}>{ contact.name }</Text>
      <Text style={styles.addressLine}>{ contact.street }</Text>
      <Text style={styles.addressLine}>{ contact.street2 }</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{...styles.addressLine, flex: 1, marginRight: 10 }}>{ contact.zip }</Text>
        <Text style={{...styles.addressLine, flex: 3 }}>{ contact.city }</Text>
      </View>
      <Text style={styles.addressLine}>{ contact.country }</Text>
    </View>

    { !simple && <View style={{ flexDirection: 'row', marginTop: 6 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.addressLine}>{t('businessId')}</Text>
        <Text style={styles.addressLine}>{t('vatPayerId')}</Text>
        <Text style={styles.addressLine}>{t('vatId')}</Text>
      </View>
      <View style={{ flexDirection: 'column', flex: 3 }}>
        <Text style={styles.addressLine}>{ contact.businessId }</Text>
        <Text style={styles.addressLine}>{ contact.vatPayerId }</Text>
        <Text style={styles.addressLine}>{ contact.vatId }</Text>
      </View>
    </View> }

    { false && simple && <View style={{ flexDirection: 'row', marginTop: 6 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.contactLine}>www.gargo.sk</Text>
        <Text style={styles.contactLine}>gargo@gargo.sk</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...styles.contactLine, flex: 1 }}>telefón predajňa</Text>
          <Text style={{ ...styles.contactLine, flex: 1 }}>0905 909 815</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...styles.contactLine, flex: 1 }}>telefón predajňa</Text>
          <Text style={{ ...styles.contactLine, flex: 1 }}>0911 109 785</Text>
        </View>
      </View>
    </View> }
  </View>
}
