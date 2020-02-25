import React, { ReactElement } from 'react'
import { Button } from '@blueprintjs/core'
import { t } from '../../locale_manager'

interface Props {
  disabled: boolean
  onClick: () => void
}

export default function DeleteAction({ disabled, onClick }: Props): ReactElement {
  return <Button
    disabled={disabled}
    text={t('delete')}
    icon="trash"
    intent="danger"
    small
    className="patterns-data-table-action"
    onClick={onClick}
  />
}
