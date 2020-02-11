import React from 'react'
import { FlexProps, AlignProps, Props } from '../components'

export interface HeightProps extends Props {
  height: number
}

export const Wrapper = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-wrapper', style }, children)

export const Page = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-page', style }, children)

export const Header = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-header', style }, children)

export const Logo = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-logo', style }, children)

export const HeaderCode = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-header-code', style }, children)

export const DocumentType = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-type', style }, children)

export const InvoiceItemRow = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-item-row', style }, children)

export const InvoiceCurrency = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-currency', style }, children)

export const InvoiceTableHeader = ({ children, style, align }: React.PropsWithChildren<AlignProps>) =>
  React.createElement('div', { className: 'patterns-invoice-table-header', style: { ...style, textAlign: align } }, children)

export const InvoiceItemsHeaderRow = ({ children, style, flex }: React.PropsWithChildren<FlexProps>) =>
  React.createElement('div', { className: 'patterns-invoice-table-header-row', style: { ...style, flex } }, children)

export const InvoiceItemsContainer = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-items', style }, children)

export const AddressBoxContainer = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box', style }, children)

export const AddressBoxHeader = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box-header', style }, children)

export const AddressBoxName = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box-name', style }, children)

export const AddressBoxOther = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box-other', style }, children)

export const AddressBoxVatLabel = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box-vat-label', style }, children)

export const AddressBoxVatValue = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-invoice-address-box-vat-value', style }, children)
