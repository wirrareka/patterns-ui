import * as React from 'react'
import { Button, Checkbox, Icon, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core'
import { Column } from '../../types'
import { FlexColumn } from '../../components'

export interface Props<T> {
  columns: Column<T>[]
  onChange: (column: Column<T>, visible: boolean) => void
}

export default class ColumnPicker<T> extends React.Component<Props<T>> {
  public static ofType<T>() {
    return ColumnPicker as new (props: Props<T>) => ColumnPicker<T>
  }

  renderColumns() {
    return this.props.columns.map(column => <Checkbox
      key={`datatable-column-picker-checkbox-${column.id}`}
      label={column.title}
      checked={column.visible || false}
      onChange={(evt) => {
        this.props.onChange(column, evt.currentTarget.checked)
      }}
    />)
  }

  render() {
    return <Popover interactionKind={PopoverInteractionKind.CLICK} position={PopoverPosition.BOTTOM_RIGHT}>
      <Button minimal icon={<Icon icon="settings"/>} />
      <div className="patterns-data-table-column-picker">
        <FlexColumn style={{ padding: 6, paddingRight: 12 }}>
          <strong style={{ marginBottom: 12 }}>Výber stĺpcov</strong>
          { this.renderColumns() }
        </FlexColumn>
      </div>
    </Popover>
  }
}
