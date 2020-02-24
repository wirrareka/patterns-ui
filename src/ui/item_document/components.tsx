import React from 'react'
import { FlexProps, AlignProps, Props } from '../../components'

export interface HeightProps extends Props {
  height: number
}

export const Wrapper = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-wrapper', style }, children)

export const Page = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-page', style }, children)

export const Header = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-header', style }, children)

export const Logo = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-logo', style }, children)

export const HeaderCode = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-header-code', style }, children)

export const DocumentType = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-type', style }, children)

export const ItemDocumentItemRow = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-item-row', style }, children)

export const ItemDocumentCurrency = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-currency', style }, children)

export const ItemDocumentTableHeader = ({ children, style, align }: React.PropsWithChildren<AlignProps>) =>
  React.createElement('div', { className: 'patterns-item_document-table-header', style: { ...style, textAlign: align } }, children)

export const ItemDocumentItemsHeaderRow = ({ children, style, flex }: React.PropsWithChildren<FlexProps>) =>
  React.createElement('div', { className: 'patterns-item_document-table-header-row', style: { ...style, flex } }, children)

export const ItemDocumentItemsContainer = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-items', style }, children)

export const AddressBoxContainer = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box', style }, children)

export const AddressBoxHeader = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box-header', style }, children)

export const AddressBoxName = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box-name', style }, children)

export const AddressBoxOther = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box-other', style }, children)

export const AddressBoxVatLabel = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box-vat-label', style }, children)

export const AddressBoxVatValue = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-item_document-address-box-vat-value', style }, children)
