import React, { ReactElement, useState, useEffect } from 'react'
import { Button, InputGroup, MenuItem } from '@blueprintjs/core'
import { Suggest } from '@blueprintjs/select'
import { FlexColumn as Column, FlexRow as Row } from '../components'
import {
  AddressBoxContainer, AddressBoxHeader, AddressBoxName, AddressBoxOther,
  AddressBoxVatValue as VatValue, AddressBoxVatLabel as VatLabel
} from './components'
import Contact from '../models/contact'

const ContactSuggest = Suggest.ofType<Contact>()

interface Props {
  contact: Contact
  header: string
  onChange: (contact: Contact) => void
  disabled?: boolean
  fetch: (query: string) => Promise<Contact[]>
}

type ContactField = 'name' | 'street' | 'street2' | 'zip' | 'city' | 'country' | 'business_id' | 'vat_id' | 'vat_payer_id'

export default function AddressBox({ contact, header, onChange, fetch, disabled = false}: Props): ReactElement {
  const [ results, setResults ] = useState([] as Contact[])
  const [ query, setQuery ] = useState('')

  console.log('contact changed', contact)
  useEffect(() => {
    setQuery(contact.name.length > 0 ? contact.name : contact.fullName)
  }, [ contact ])

  const update = async (field: ContactField, value: string) => {
    console.log('update', value)
    const clone = new Contact(contact.clone)
    clone[field] = value
    if (field === 'name') {
      const items = await fetch(value)
      setResults(items)
    }
    onChange(clone)
  }

  const inputUpdate = (evt: any) => {
    console.log('on input update')
    const clone = new Contact(contact.clone)
    clone[evt.currentTarget.name as ContactField] = evt.currentTarget.value
    onChange(clone)
  }

  const onSelect = (contact: Contact) => {
    console.log('on select')
    const clone = new Contact(contact.clone)
    onChange(clone)
  }

  return <AddressBoxContainer>
    <AddressBoxHeader>{ header }</AddressBoxHeader>
    <AddressBoxName>
      { !disabled ?
        <Row>
          <ContactSuggest
            fill
            className="suggest-minimal"
            items={results}
            inputValueRenderer={contact => contact.name || contact.fullName}
            itemRenderer={(contact, options) => <MenuItem
              key={`contact-${contact.id}`}
              text={contact.name.length > 0 ? contact.name : contact.fullName}
              onClick={options.handleClick}
            />}
            onItemSelect={contact => onSelect(contact)}
            query={query}
            selectedItem={contact}
            onQueryChange={query => update('name', query)}
            noResults={
              <MenuItem icon="plus" text="Nový klient"/
            >}
          />
          <Button
            minimal
            style={{ width: 30 }}
            icon="cross"
            onClick={() => {
              setResults([ new Contact({}) ])
              setQuery('')
              onChange(new Contact({}))
            }}
          />
        </Row>
      :
        <div className="suggest-minimal">
          <InputGroup
            fill
            disabled={disabled}
            value={contact.name}
            name="name"
            onChange={inputUpdate}
            placeholder="Meno"
          />
        </div>
      }
    </AddressBoxName>
    <AddressBoxOther>
      <Column>
        <Row style={{ height: 26 }}>
          <InputGroup
            fill
            disabled={disabled}
            value={contact.street}
            name="street"
            onChange={inputUpdate}
            placeholder="Ulica"
          />
        </Row>
        { (!disabled || contact.street2.length > 0) &&
          <Row style={{ height: 26 }}>
            <InputGroup
              fill
              disabled={disabled}
              value={contact.street2}
              name="street2"
              onChange={inputUpdate}
              placeholder="Ulica 2"
            />
          </Row>
        }
        { disabled && (contact.street2.length === 0) && <Row style={{ height: 26 }}></Row> }
      </Column>
      <Row style={{ height: 26 }}>
        <div style={{ flex: 1 }}>
          <InputGroup
            fill
            disabled={disabled}
            value={contact.zip}
            name="zip"
            onChange={inputUpdate}
            placeholder="PSČ"
          />
        </div>
        <div style={{ flex: 4 }}>
          <InputGroup
            fill
            disabled={disabled}
            value={contact.city}
            name="city"
            onChange={inputUpdate}
            placeholder="Mesto"
          />
        </div>
      </Row>
      <Row style={{ height: 26 }}>
        <InputGroup
          fill
          disabled={disabled}
          value={contact.country}
          name="country"
          onChange={inputUpdate}
          placeholder="Krajina"
        />
      </Row>
    </AddressBoxOther>
    <Row>
      <Column style={{ flex: 1, marginTop: 14 }}>
        { (!disabled || contact.business_id.length > 0) &&
          <Row>
            <VatLabel>IČO:</VatLabel>
            <VatValue>
              <InputGroup
                fill
                disabled={disabled}
                value={contact.business_id}
                name="business_id"
                onChange={inputUpdate}
                placeholder="IČO"
              />
            </VatValue>
          </Row>
        }
        { (!disabled || contact.vat_payer_id.length > 0) &&
          <Row>
            <VatLabel>DIČ:</VatLabel>
            <VatValue>
              <InputGroup
                fill
                disabled={disabled}
                value={contact.vat_payer_id}
                name="vat_payer_id"
                onChange={inputUpdate}
                placeholder="DIČ"
              />
            </VatValue>
          </Row>
        }
        { (!disabled || contact.vat_id.length > 0) &&
          <Row>
            <VatLabel>IČ DPH:</VatLabel>
            <VatValue>
              <InputGroup
                fill
                disabled={disabled}
                value={contact.vat_payer_id}
                name="vat_id"
                onChange={inputUpdate}
                placeholder="IČ DPH"
              />
            </VatValue>
          </Row>
        }
      </Column>
    </Row>
  </AddressBoxContainer>
}
