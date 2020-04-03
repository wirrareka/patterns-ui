import React from 'react'
import { Button, InputGroup, MenuItem } from '@blueprintjs/core'
import { Suggest } from '@blueprintjs/select'
import { FlexColumn as Column, FlexRow as Row } from '../../components'
import {
  AddressBoxContainer, AddressBoxHeader, AddressBoxName, AddressBoxOther,
  AddressBoxVatValue as VatValue, AddressBoxVatLabel as VatLabel
} from './components'

import { Contact } from '../../models'
import { t } from '../../locale_manager'

const ContactSuggest = Suggest.ofType<Contact>()

interface Props {
  contact: Contact
  detail?: React.ReactElement
  header: string
  disabled?: boolean
  fetch: (query: string) => Promise<Contact[]>
  onChange: <K extends keyof Contact>(property: K, value: Contact[K]) => void
  onReplace: (contact: Contact) => void
}

interface State {
  results: Contact[]
  query: string
}

export default class ContactForm extends React.Component<Props, State> {
  state = {
    query: '',
    results: [],
  }

  constructor(props: Props) {
    super(props)
    this.renderSuggestItem = this.renderSuggestItem.bind(this)
  }

  renderSuggestItem(contact, options) {
    return <MenuItem
      key={`contact-${contact.id}`}
      text={contact.getName()}
      onClick={options.handleClick}
    />
  }

  renderSuggest() {
    const newItem = (click: (evt: React.MouseEvent) => void) => <MenuItem
      intent="success"
      icon="plus"
      text="Nový klient"
      onClick={click}
    />

    return <Row>
      <ContactSuggest
        fill
        className="suggest-minimal patterns-contact-form-suggest"
        items={this.state.results}
        inputValueRenderer={contact => contact.name || contact.fullName}
        itemRenderer={this.renderSuggestItem}
        onItemSelect={item => this.props.onReplace(item)}
        query={this.state.query}
        selectedItem={this.props.contact}
        createNewItemFromQuery={(query) => new Contact({ name: query })}
        createNewItemRenderer={(query, active, handleClick) => newItem(handleClick)}
        noResults={ <MenuItem text={t('noResults')}/> }
        onQueryChange={async query => {
          await this.setState({ query })
          const results = await this.props.fetch(query)
          await this.setState({ results })
        }}
      />
      <Button
        minimal
        style={{ width: 30 }}
        icon="cross"
        onClick={() => this.setState({ results: [], query: '' })}
      />
    </Row>
  }

  renderName() {
    return <AddressBoxName>
      { !this.props.disabled ?
        this.renderSuggest()
      :
        <div className="suggest-minimal patterns-contact-form-suggest">
          <InputGroup
            fill
            disabled={this.props.disabled}
            value={this.props.contact.name}
            onChange={evt => this.props.onChange('name', evt.currentTarget.value)}
            placeholder={t('name')}
          />
        </div>
      }
    </AddressBoxName>
  }

  render() {
    return <AddressBoxContainer>
      <AddressBoxHeader>{ this.props.header }</AddressBoxHeader>
      { this.renderName() }
      <AddressBoxOther>
        <Column>
          <Row style={{ height: 26 }}>
            <InputGroup
              fill
              disabled={this.props.disabled}
              value={this.props.contact.street}
              onChange={evt => this.props.onChange('street', evt.currentTarget.value)}
              placeholder={t('street')}
            />
          </Row>
          { (!this.props.disabled || this.props.contact.street2.length > 0) &&
            <Row style={{ height: 26 }}>
              <InputGroup
                fill
                disabled={this.props.disabled}
                value={this.props.contact.street2}
                onChange={evt => this.props.onChange('street2', evt.currentTarget.value)}
                placeholder={t('street2')}
              />
            </Row>
          }
          { this.props.disabled && (this.props.contact.street2.length === 0) && <Row style={{ height: 26 }}></Row> }
        </Column>
        <Row style={{ height: 26 }}>
          <VatLabel style={{ flex: 1 }}>
            <InputGroup
              fill
              disabled={this.props.disabled}
              value={this.props.contact.zip}
              onChange={evt => this.props.onChange('zip', evt.currentTarget.value)}
              placeholder={t('zip')}
            />
          </VatLabel>
          <VatValue style={{ flex: 3 }}>
            <InputGroup
              fill
              disabled={this.props.disabled}
              value={this.props.contact.city}
              onChange={evt => this.props.onChange('city', evt.currentTarget.value)}
              placeholder={t('city')}
            />
          </VatValue>
        </Row>
        <Row style={{ height: 26 }}>
          <InputGroup
            fill
            disabled={this.props.disabled}
            value={this.props.contact.phone}
            onChange={evt => this.props.onChange('phone', evt.currentTarget.value)}
            placeholder={t('phone')}
          />
        </Row>
      </AddressBoxOther>
      { this.props.detail && this.props.detail }
    </AddressBoxContainer>
  }
}
