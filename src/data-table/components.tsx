import React from 'react'

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

export const Toolbar = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-toolbar' }, children)

export const Header = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-header' }, children)

export const Content = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-content' }, children)

export const ItemRow = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-item-row' }, children)

export const ExpandedItemRow = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-item-row-expanded' }, children)

export const SelectionCount = ({ children }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { className: 'patterns-data-table-selection-count' }, children)


interface CellProps {
  className?: string
  flex?: number
  width?: number
  head?: boolean
  onClick?: () => void
}

export const Cell = ({ children, width, flex, head, onClick, className }: React.PropsWithChildren<CellProps>) => {
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

  return React.createElement('div', { className: _className.join(' '), style, onClick }, children)
}

export const Filter = ({ children }) =>
  React.createElement('div', { className: 'patterns-data-table-filter' }, children)
