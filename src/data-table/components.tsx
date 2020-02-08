import { Colors } from '@blueprintjs/core'
import styled, { css } from 'styled-components'

const ROW_HEIGHT = 28

interface CellProps {
  flex?: number
  width?: number
  head?: boolean
}

interface FlexProps {
  flex?: number
}

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
`

export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;

  ${props => props.flex && css`
    flex: ${props.flex};
  `}
`

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;

  ${props => props.flex && css`
    flex: ${props.flex};
  `}
`

export const Toolbar = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  padding: 0 10px;
  border-top: 1px solid ${Colors.LIGHT_GRAY1};
  button {
    font-size: 12px;
    font-weight: bold;
    color: ${Colors.DARK_GRAY3};
  }
`

export const Header = styled.div`
  height: ${ROW_HEIGHT}px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.LIGHT_GRAY1};
  background-color: ${Colors.LIGHT_GRAY5};
  cursor: pointer;
  font-size: 12px;
`

export const Content = styled.div`
  flex: 1;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  height: ${ROW_HEIGHT}px;
  border-bottom: 1px solid ${Colors.LIGHT_GRAY3};
  &:nth-child(even) {
    background-color: ${Colors.LIGHT_GRAY5};
  }
  &:hover {
    background-color: ${Colors.LIGHT_GRAY4};
  }
`

export const ExpandedItemRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.LIGHT_GRAY3};
  height: 320px;
`

export const SelectionCount = styled.div`
  margin-left: 12px;
`

export const Cell = styled.div<CellProps>`
  padding-left: 6px;
  padding-right: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  line-height: ${ROW_HEIGHT}px;

  ${props => props.width && css`
    width: ${props.width}px;
  `}

  ${props => props.flex && css`
    flex: ${props.flex};
  `}

  ${props => (!props.width && !props.flex) && css`
    flex: 1;
  `}

  ${props => props.head && css`
    &:hover {
      background-color: ${Colors.LIGHT_GRAY3}
    };
  `}

  border-left: 1px solid ${Colors.LIGHT_GRAY3};

  &:first-child {
    border-left: none;
  }

  label.bp3-checkbox {
    max-width: 40px;
  }
`

export const Filter = styled.div`
  padding: 6px;
  display: flex;
  flex-directon: row;
`
