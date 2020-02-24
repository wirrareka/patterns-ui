import React, { createElement } from 'react'

export interface Props {
  style?: React.CSSProperties
}

export interface FlexProps extends Props {
  flex?: number
  className?: string
}

export interface AlignProps extends Props {
  align?: "left" | "right" | "center"
}

export const Container = ({ children, style }: React.PropsWithChildren<Props>) =>
  createElement('div', { className: 'patterns-data-table', style }, children)

export const FlexRow = ({ children, flex, style, className  }: React.PropsWithChildren<FlexProps>) =>
  createElement('div', { className: `patterns-flex-row ${className}`, style: { ...style, flex } }, children)

export const FlexColumn = ({ children, flex, style, className }: React.PropsWithChildren<FlexProps>) =>
  createElement('div', { className: `patterns-flex-column ${className}`, style: { ...style, flex } }, children)

export const Toolbar = ({ children, style }: React.PropsWithChildren<Props>) =>
  createElement('div', { className: 'patterns-toolbar', style }, children)
