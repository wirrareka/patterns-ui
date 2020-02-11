import React, { ReactElement } from 'react'
import { Button, Classes, ControlGroup, FormGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core'
import { DateInput } from '@blueprintjs/datetime'
import { FlexColumn, FlexRow } from '../../components'
import { Filter } from '../components'
import { Column, FilterComparator, FilterState, FormatDateType, ParseDateType } from '../../types'
import { t } from '../../locale-manager'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  setFilterValue: (column: Column<T>, value: Date, secondary?: boolean) => void
  setFilterActive: (column: Column<T>, active: boolean) => void
  setFilterComparator: (column: Column<T>, value: FilterComparator) => void
  formatDate: FormatDateType
  parseDate: ParseDateType
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
              formatDate={this.props.formatDate}
              parseDate={this.props.parseDate}
              placeholder={comparator === 'range' ? t('range_from') : t('day')}
              value={getValue(false)}
              onChange={(date: Date, isUserChange: boolean) => setFilterValue(column, date)}
            />
          </FormGroup>

          { comparator === 'range' &&
            <FormGroup style={{ marginRight: 12 }}>
              <DateInput
                formatDate={this.props.formatDate}
                parseDate={this.props.parseDate}
                placeholder={t('range_to')}
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
          onChange={evt => setFilterComparator(column, evt.currentTarget.value as FilterComparator)}>
          <Radio label={t('at_day')} value="eq" />
          <Radio label={t('older_than')} value="lte" />
          <Radio label={t('newer_than')} value="gte" />
          <Radio label={t('range')} value="range" />
        </RadioGroup>
      </FlexRow>
    </FlexColumn>
  </Filter>
}
