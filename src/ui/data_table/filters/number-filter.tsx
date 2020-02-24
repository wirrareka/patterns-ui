import React, { ReactElement } from 'react'
import { Button, Classes, ControlGroup, FormGroup, InputGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core'
import { FlexColumn, FlexRow } from '../../../components'
import { Filter } from '../components'
import { Column, FilterComparator, FilterState } from '../../../types'
import { t } from '../../../locale_manager'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  setFilterValue: (column: Column<T>, value: number, secondary?: boolean) => void
  setFilterActive: (column: Column<T>, active: boolean) => void
  setFilterComparator: (column: Column<T>, value: FilterComparator) => void
}

export default function NumberFilter<T>({
  column, filterState, setFilterValue, setFilterActive, setFilterComparator
}: Props<T>): ReactElement<T> {

  const getValue = (secondary: boolean) => {
    if (filterState.comparator === 'range') {
      if (Array.isArray(filterState.value)) {
        return (filterState.value as [number, number])[secondary ? 1 : 0].toString()
      } else {
        if (secondary) {
          return '0'
        } else {
          return (filterState.value as number).toString()
        }
      }
    } else {
      return (filterState.value as number).toString() || '0'
    }
  }

  return <Filter>
    <FlexColumn flex={1}>
      <FlexRow style={{ height: 30, justifyContent: 'center' }}>
        <ControlGroup>
          <FormGroup style={{ marginRight: 12 }}>
            <InputGroup
              placeholder={filterState.comparator === 'range' ? t('range_from') : t('value')}
              value={getValue(false)}
              onChange={(evt: React.FormEvent<HTMLInputElement>) => setFilterValue(column, parseFloat(evt.currentTarget.value))}
            />
          </FormGroup>

          { filterState.comparator === 'range' &&
            <FormGroup>
              <InputGroup
                placeholder={t('range_to')}
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
          selectedValue={filterState.comparator}
          onChange={evt => setFilterComparator(column, evt.currentTarget.value as FilterComparator)}
        >
          <Radio label={t('equal')} value="eq" />
          <Radio label={t('less_than')} value="lte" />
          <Radio label={t('greater_than')} value="gte" />
          <Radio label={t('range')} value="range" />
        </RadioGroup>
      </FlexRow>
    </FlexColumn>
  </Filter>
}
