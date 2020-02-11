import React, { ReactElement } from 'react'
import { Button, Classes, FormGroup, InputGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core'
import { FlexColumn, FlexRow } from '../../components'
import { Filter } from '../components'
import { Column, FilterComparator, FilterState } from '../../types'
import { t } from '../../locale-manager'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  setFilterValue: (column: Column<T>, value: string) => void
  setFilterActive: (column: Column<T>, active: boolean) => void
  setFilterComparator: (column: Column<T>, value: FilterComparator) => void
}

export default function TextFilter<T>({
  column, filterState, setFilterValue, setFilterActive, setFilterComparator
}: Props<T>): ReactElement<T> {
  return <Filter>
    <FlexColumn flex={1}>
      <FlexRow style={{ height: 30, justifyContent: 'center' }}>
        <FormGroup style={{ marginRight: 12 }}>
          <InputGroup
            placeholder="Filter..."
            value={filterState.value as string || ''}
            onChange={(evt: React.FormEvent<HTMLInputElement>) => setFilterValue(column, evt.currentTarget.value)}
          />
        </FormGroup>

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
          onChange={evt => setFilterComparator(column, evt.currentTarget.value as FilterComparator)}>
          <Radio label={t('contains')} value="contains" />
          <Radio label={t('starts_with')} value="starts_with" />
          <Radio label={t('ends_with')} value="ends_with" />
        </RadioGroup>
      </FlexRow>
    </FlexColumn>
  </Filter>
}
