import React from 'react'

import { Alignment } from '../types'

interface Props {
  style?: React.CSSProperties
}

interface FlexProps extends Props {
  flex?: number
}

// export const Container = <div className="patterns-data-table"/>
export const Container = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table', style }, children)

export const FlexRow = ({ children, flex, style  }: React.PropsWithChildren<FlexProps>) =>
  React.createElement('div', { className: 'patterns-flex-row', style: { ...style, flex } }, children)

export const FlexColumn = ({ children, flex, style }: React.PropsWithChildren<FlexProps>) =>
  React.createElement('div', { className: 'patterns-flex-column', style: { ...style, flex } }, children)

export const Toolbar = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-toolbar', style }, children)

export const Header = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-header', style }, children)

export const Content = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-content', style }, children)

export const ItemRow = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-item-row', style: { ...style } }, children)

export const ExpandedItemRow = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-item-row-expanded', style }, children)

export const SelectionCount = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-selection-count', style }, children)


interface CellProps {
  className?: string
  flex?: number
  width?: number
  head?: boolean
  onClick?: () => void
  alignment?: Alignment
}

export const Cell = ({ children, width, flex, head, onClick, className, alignment }: React.PropsWithChildren<CellProps>) => {
  const style = {} as React.CSSProperties

  if (flex) {
    style.flex = `${flex}`
  }

  if (width) {
    style.width = `${width}px`
  }

  if (!flex && !width) {
    style.flex = '1'
  }

  const _className = [
    head ? 'patterns-data-table-cell header' : 'patterns-data-table-cell'
  ]

  if (className) {
    _className.push(className)
  }

  if (alignment) {
    if (width) {
      style.textAlign = alignment
    }

    if (alignment === Alignment.Center) {
      style.justifyContent = 'center'
    } else {
      style.justifyContent = alignment === Alignment.Left ? 'flex-start' : 'flex-end'
    }
  }
  return React.createElement('div', { className: _className.join(' '), style, onClick }, children)
}

export const Filter = ({ children }) =>
  React.createElement('div', { className: 'patterns-data-table-filter' }, children)
