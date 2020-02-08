import React, { ReactElement } from 'react'
import { Button, Classes, ControlGroup, FormGroup, InputGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core'
import { Filter, FlexColumn, FlexRow } from '../components'
import { Column } from '../data-table'
import { FilterComparator, FilterState } from '../filter-renderer'

interface Props<T> {
  column: Column<T>
  state: FilterState
  setFilterValue: (column: Column<T>, value: number, secondary?: boolean) => void
  setFilterActive: (column: Column<T>, active: boolean) => void
  setFilterComparator: (column: Column<T>, value: FilterComparator) => void
}

export default function NumberFilter<T>({
  column, state, setFilterValue, setFilterActive, setFilterComparator
}: Props<T>): ReactElement<T> {

  const getValue = (secondary: boolean) => {
    if (state.comparator === 'range') {
      if (Array.isArray(state.value)) {
        return (state.value as [number, number])[secondary ? 1 : 0].toString()
      } else {
        if (secondary) {
          return '0'
        } else {
          return (state.value as number).toString()
        }
      }
    } else {
      return (state.value as number).toString() || '0'
    }
  }

  return <Filter>
    <FlexColumn flex={1}>
      <FlexRow style={{ height: 30, justifyContent: 'center' }}>
        <ControlGroup>
          <FormGroup style={{ marginRight: 12 }}>
            <InputGroup
              placeholder={this.state.filterStates[column.id].comparator === 'range' ? 'Od...' : 'Hodnota'}
              value={getValue(false)}
              onChange={(evt: React.FormEvent<HTMLInputElement>) => setFilterValue(column, parseFloat(evt.currentTarget.value))}
            />
          </FormGroup>

          { this.state.filterStates[column.id].comparator === 'range' &&
            <FormGroup>
              <InputGroup
                placeholder="Do..."
                value={getValue(true)}
                onChange={(evt: React.FormEvent<HTMLInputElement>) => setFilterValue(column, parseFloat(evt.currentTarget.value), true)}
              />
            </FormGroup> }
        </ControlGroup>

        <Button
          minimal={true}
          intent={Intent.DANGER}
          className={Classes.POPOVER_DISMISS}
          onClick={(evt: React.MouseEvent<HTMLElement>) => setFilterActive(column, false)}
          icon="cross"
        />

        <Button
          minimal={true}
          intent={Intent.SUCCESS}
          className={Classes.POPOVER_DISMISS}
          onClick={(evt: React.MouseEvent<HTMLElement>) => setFilterActive(column, true)}
          icon="tick"
        />
      </FlexRow>

      <FlexRow style={{ fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 }}>
        <RadioGroup
          selectedValue={this.state.filterStates[column.id].comparator}
          onChange={evt => setFilterComparator(column, evt.currentTarget.value as FilterComparator)}
        >
          <Radio label="Rovné" value="eq" />
          <Radio label="Menšie ako" value="lte" />
          <Radio label="Väčšie ako" value="gte" />
          <Radio label="Rozsah" value="range" />
        </RadioGroup>
      </FlexRow>
    </FlexColumn>
  </Filter>
}
