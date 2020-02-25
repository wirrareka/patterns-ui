import React from "react"
import { Button } from '@blueprintjs/core'
import Notifier from './notifier'
import { FlexColumn } from "../../components"

export default {
  title: "Notifier"
}

export const AllFeatures = () => {
  const [key, setKey] = React.useState('')

  return <FlexColumn>
    <Button
      text="Show Success"
      onClick={() => Notifier.success("Everything went okay")}
    />
    <Button
      text="Show Failure"
      onClick={() => Notifier.failure("Something went wrong")}
    />
    <Button
      text="Show Success with Custom Icon"
      onClick={() => Notifier.success('User updated', 'user')}
    />
    <Button
      text="Start upload"
      onClick={() => {
        const key = Notifier.upload()
        setKey(key)
      }}
    />
    <Button
      text="Start download"
      onClick={() => {
        const key = Notifier.download()
        setKey(key)
      }}
    />
    <Button
      text="Stop loading"
      onClick={() => Notifier.stopLoading(key)}
    />
    <Button
      text="Clear"
      onClick={() => Notifier.clear()}
    />
  </FlexColumn>
}
