import React, { useState } from "react"
import { Button } from '@blueprintjs/core'
import Confirm from './confirm'
import DeleteAction from "../data_table/delete_action"
import PatternApp from '../../pattern_app'

export default {
  title: "Confirm"
}

export const AllFeatures = () => {
  const [isOpen, setIsOpen ] = useState(false)

  return <div>
    <Button
      title="menu"
      text="Show Confirm"
      onClick={() => PatternApp.confirm(
        'Are you sure?',
        'Here comes the action description to ensure the user in decision',
        <DeleteAction
          disabled={false}
          onClick={() => { setIsOpen(false) }}
        />
      )}
    />
    <Confirm />
  </div>
}
