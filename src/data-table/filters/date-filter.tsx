import React, { ReactElement } from 'react'
import { Button, Classes, ControlGroup, FormGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core'
import { DateInput } from '@blueprintjs/datetime'
import { Filter, FlexColumn, FlexRow } from '../components'
import { Column, FilterComparator, FilterState } from '../types'
import { formatDate, parseDate } from '../../common'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  setFilterValue: (column: Column<T>, value: Date, secondary?: boolean) => void
  setFilterActive: (column: Column<T>, active: boolean) => void
  setFilterComparator: (column: Column<T>, value: FilterComparator) => void
}

export default function DateFilter<T>({
  column, filterState, setFilterValue, setFilterActive, setFilterComparator
}: Props<T>): ReactElement<T> {

  const getValue = (secondary: boolean) => {
    if (filterState.comparator === 'range') {
      if (Array.isArray(filterState.value)) {
        return (filterState.value as [Date, Date])[secondary ? 1 : 0]
      } else {
        return filterState.value as Date
      }
    } else {
      return (filterState.value as Date) || new Date()
    }
  }

  const comparator = filterState.comparator

  return <Filter>
    <FlexColumn flex={1}>
      <FlexRow style={{ height: 30, justifyContent: 'center' }}>
        <ControlGroup>
          <FormGroup style={{ marginRight: 12 }}>
            <DateInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={comparator === 'range' ? 'Od...' : 'Deň'}
              value={getValue(false)}
              onChange={(date: Date, isUserChange: boolean) => setFilterValue(column, date)}
            />
          </FormGroup>

          { comparator === 'range' &&
            <FormGroup style={{ marginRight: 12 }}>
              <DateInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder="Do"
                value={getValue(true)}
                onChange={(date: Date, isUserChange: boolean) => setFilterValue(column, date, true)}
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
          selectedValue={comparator}
          onChange={evt => setFilterComparator(column, evt.currentTarget.value as FilterComparator)}
        >
          <Radio label="V daný deň" value="eq" />
          <Radio label="Staršie ako" value="lte" />
          <Radio label="Novšie ako" value="gte" />
          <Radio label="Rozsah" value="range" />
        </RadioGroup>
      </FlexRow>
    </FlexColumn>
  </Filter>
}
